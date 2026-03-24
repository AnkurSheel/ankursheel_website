---
title: "Rolling Your Own Dependency Injection in Unity"
excerpt: "Unity has no DI story out of the box and the existing frameworks felt too heavy. So I rolled my own using Microsoft.Extensions.DependencyInjection."
category: "programming"
tags:
- "unity"
- "tutorial"

---

Unity codebases have a way of turning into spaghetti. Every system talks to every other system through singletons and magic strings, and it never gets better with time. When I came back to Unity to build WordXplorer, I knew what I wanted: clean dependency injection, testable classes, no hidden dependencies. The problem was that while I'd used DI in .NET Core apps, I'd never seen it in a Unity project.

By the end of this, you'll have a setup where plain C# classes get proper constructor injection, MonoBehaviours register themselves automatically, and the whole thing initialises lazily without a bootstrapper. It ends up feeling a lot like any other .NET Core app which is exactly the point.

## The Alternatives (And Why They Fall Short)

Before getting into the solution, it’s worth looking at what most Unity developers do instead. Spoilers: it’s not great.

### Drag-and-Drop in the Editor

The simplest way to connect objects is to expose a private serialised field and drag the reference in the Inspector. This is convenient, especially for artists and designers who can wire up behaviours without touching code. But it's a lot of manual effort and doesn't scale. And none of it is easily testable because you can't run a unit test against a scene.

### Querying the Scene

You can find objects at runtime in a few ways: by name, by tag, or by type.

Finding by name or tag relies on magic strings. Rename something in the hierarchy and the code breaks. The worst part is you only find out at runtime.

Finding by type is better because it's at least type-safe. But it's still a global scene query, it's slow, and it gives you no way to swap in a different implementation for testing.

### Singletons

Most Unity tutorials reach for singletons, and they are better than the two options above. But in practice, singletons cause three problems that compound as the project grows.

**Global state**: Every singleton is effectively a global variable. Any class can reach in and modify it at any time, from anywhere. Reasoning about what changed, and when, becomes increasingly difficult. You can manage this if you're diligent — but diligence has a way of slipping when you're in a rush and just need to ship.
    
**Hidden dependencies**: When a class accesses a singleton directly, that dependency is invisible from the outside. You can't tell what a class needs just by looking at its constructor or its interface. The only way to find out is to read the implementation.
    
**(Un)testability**: Singeltons make writing automated tests hard. If a class depends on a concrete singleton, you can't swap it out for a fake in a test. You could test with the real thing, but only if it has no side effects and doesn't depend on other singletons. In practice, it usually does.

### Unity-Specific DI Frameworks

There are frameworks built specifically for Unity DI like [Zenject](https://github.com/modesttree/Zenject) and [VContainer](https://vcontainer.hadashikick.jp/). Both are heavy frameworks with their own learning curve. I find them too bloated for my purposes, but they might be a viable option. 

To be honest, I really didnt look too much into them. I might just be reinventing the wheel here.

## What is Dependency Injection?

DI (Dependency Injection) is a technique in OOP where instead of a class creating its own dependencies, you pass them in from the outside. 

So instead of this:

```csharp
public class GameManager
{
    private AudioManager _audio = new AudioManager();
}
```

You do this:

```csharp
public class GameManager
{
    private IAudioManager _audio;

    public GameManager(IAudioManager audio)
    {
        _audio = audio;
    }
}
```

Now `GameManager` doesn’t care if it gets a real `AudioManager` or a mock for testing. A DI container automates the wiring and  resolves them wherever they're needed.

## Why Does Unity Make DI Awkward?

Two things get in the way in Unity.

First, MonoBehaviours can't be newed up. Unity owns their lifecycle by calling `Awake`, `Start`, `Update`, and so on. You can't pass dependencies through a constructor the normal way.

Second, there's no single entry point. A .NET console app has `Main`. An ASP.NET app has `Program.cs`. But Unity has scenes, objects, and an initialization order you don't fully control. Scenes can also be loaded and unloaded, which means objects might not always be present when the container is first created, or might be destroyed after they've already been registered.

You might think these two constraints would be a showstopper. They're not. But they do require a slightly different approach.

## The Solution

### Step 1: Add the NuGet Packages

 Download the following DLLs from [NuGet](https://www.nuget.org/packages/Microsoft.Extensions.DependencyInjection/) and drop them into your `Assets/Plugins` folder:

- `Microsoft.Extensions.DependencyInjection.dll`
- `Microsoft.Extensions.DependencyInjection.Abstractions.dll`

I've written about [how to install NuGet packages in Unity](https://www.ankursheel.com/blog/installing-nuget-packages-unity-2021) in more detail. If you use assembly definitions, add references to these DLLs in the relevant assembly definition file.

### Step 2: The DependencyHelper

`DependencyHelper` owns the DI container and acts as the resolution point for both plain C# services and MonoBehaviours.

```csharp
public sealed class DependencyHelper
{
    private static readonly Dictionary<Type, object> _injectedMonoBehaviours = new();
    private static readonly Lazy<DependencyHelper> _lazy =
        new(() => _instance ?? new DependencyHelper());
    private static DependencyHelper _instance;
    private static ServiceProvider _serviceProvider;

    private DependencyHelper()
    {
        var serviceCollection = new ServiceCollection();
        ServiceRegistry.RegisterServices(serviceCollection);
        _serviceProvider = serviceCollection.BuildServiceProvider();
        _instance = this;
    }

    public static void Register(object instance)
    {
        _injectedMonoBehaviours[instance.GetType()] = instance;
    }

    public static T GetInjectedMonoBehaviour<T>() where T : class
        => _injectedMonoBehaviours[typeof(T)] as T;

    public static T GetRequiredService<T>() where T : class
    {
        _ = _lazy.Value; // ensures the container is built on first call
        return _serviceProvider.GetRequiredService<T>();
    }
}
```


- `Register`: called automatically by `InjectableMonoBehaviour.Awake` to store the live MonoBehaviour instance.
- `GetInjectedMonoBehaviour`: used inside `ServiceRegistry` to wire a MonoBehaviour into the container by fetching the stored instance.
- `GetRequiredService`: how everything else resolves dependencies. Throws if the service isn't registered.
- The `Lazy` factory ensures the container is built exactly once, on the first call to `GetRequiredService`. The `_instance` check means there is only ever one container instance.


### Step 3: Inherit from InjectableMonoBehaviour

Next, we need a way to add MonoBehaviours to the DI container

`InjectableMonoBehaviour` is a base class that MonoBehaviours inherit from, which registers them with the container when they wake up.

Any MonoBehaviour that needs to be resolvable by the container should extend this:

```csharp
public class InjectableMonoBehaviour : MonoBehaviour
{
    protected virtual void Awake()
    {
        DependencyHelper.Register(this);
    }
}
```

When Unity calls `Awake`, the MonoBehaviour registers itself by type. That's it. The container can now hand out a reference to this instance when something asks for it.

### Step 4: The Service Registry

This is where you tell the container what goes where.

```csharp
public static class ServiceRegistry
{
    public static void RegisterServices(IServiceCollection serviceCollection)
    {
        // Plain C# service
        serviceCollection.AddTransient<ILevelSaveDataService, LevelSaveDataService>();

        // MonoBehaviour
        serviceCollection.AddTransient<IAudioManager>(
            _ => DependencyHelper.GetInjectedMonoBehaviour<AudioManager>());
    }
}
```

Plain C# services register normally. MonoBehaviours are different - they use a lambda to defer the lookup until the instance is actually needed, by which point Unity will have called `Awake` on the MonoBehaviour and registered it.

### Step 5: Watch the Lifecycle Order

This is the part that will bite you if you're not paying attention.

 Unity calls `Awake` on scripts in an arbitrary order. If you try to resolve a dependency in `Awake`, you might run before that dependency has even registered itself. If that happens, you will get a `KeyNotFoundException` at runtime.

We know that `Start` is called after `Awake`, so the rule is simple: 

> Always resolve and use dependencies in `Start`, not `Awake`.

This also has the added benefit of resolving the dependency only once. 

```csharp
public class LevelSaveDataManager : MonoBehaviour
{
    private ILevelSaveDataService _levelSaveDataService;

    private void Start()
    {
        _levelSaveDataService = DependencyHelper.GetRequiredService<ILevelSaveDataService>();
    }
}
```

The same caveat applies across scenes. If a scene transition destroys and recreates MonoBehaviours, they re-register themselves in their new `Awake`. The container's service registrations stay intact - those lambdas always pull the current live instance. But if you're holding a cached reference somewhere and the MonoBehaviour was destroyed, that reference is stale. Be deliberate about when you resolve.

## Isn't This the Service Locator Anti-Pattern?

Yes. I know. I'm not thrilled about it either.

The criticism is legitimate: when a class calls `DependencyHelper.GetRequiredService<T>()` directly, its dependencies are hidden. You can't tell from the constructor what it needs. Testing becomes harder because you have to know to configure the locator before running any test.

But Unity’s lifecycle leaves us with very few "clean" options.

Constructor injection requires that you control object creation. 

In Unity, you don't. MonoBehaviours are created by the engine, attached to GameObjects, and initialised through `Awake` and `Start`. There's no constructor call you can intercept to inject dependencies the clean way.

I think the Service Locator is a small price to pay given all the other alternatives. We can minimize the damage by treating MonoBehaviours as a "thin" layer. They handle the Unity stuff (input, rendering), and delegate all the actual logic to injected plain C# classes.

As you saw in Step 5, `LevelSaveDataManager` is the thin MonoBehaviour — it knows _when_ to load. `ILevelSaveDataService` is the plain C# class where all the loading logic lives, fully testable without a running scene.

## Was It Worth It?

If you've worked on .NET Core apps, you already know most of what's here. Unity just requires a small amount of extra wiring to account for its lifecycle. Once that's in place, you can mostly forget it's there.

What are your experiences with DI in Unity? Have you gone the Zenject route, or are you still living with singletons? I'm curious what you are doing? Let me know in the comments.