---
title: "How To Disable Buttons In Unity"
excerpt: "Unity offers three different ways to disable a UI Button, each of which can be used depending on the desired outcome."
category: "programming"
tags:

- "unity"

---

When working with Unity UI, there will be times when you will need to disable a button. Unity provides three ways to disable a UI Button, each of which can be used depending on the desired user experience.

## Using enabled property

The `enabled` property will make the button non-clickable, but it will not use the disabled colour.

```csharp
testButton.enabled = false;
```

You will rarely want to use `enabled` as it results in a confusing user experience.

## Using interactable property

The `interactable` property will make the button non-clickable and will set the disabled colour (which is grey by default).

```csharp
testButton.interactable = false;
```

In most cases, this is the option to use.

## Using GameObject.SetActive

`gameObject.SetActive` will deactivate the button and hide it from the user.

```csharp
testButton.gameObject.SetActive(false);
```

This is an excellent option if you want to change what button is showing based on some conditions.

## Conclusion

Using these methods, you can customize how the user will interact with the UI Button. It is crucial to understand how each of these methods works so that you can choose the best one for your project.
