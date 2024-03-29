---
title: 'How to set up the project properties for Source Generators'
excerpt: 'A guide to setting up the project properties that we need to create and use source generators'
category: "programming"
tags:
    - 'csharp'
    - 'productivity'
    - 'snippet'
    - 'source generator'
    - 'dev tools'
---

Source Generators are an excellent way to reduce boilerplate and repetitive code that we have to write. This post will look at the project properties we need to set on both the source generator and consumer projects.

## Source Generator Project Properties

A source generator is a .Net class.

### Create a new solution and a library project

The empty project is targeting Net5.0. I have also enabled nullables.

```xml
<PropertyGroup>
    <TargetFramework>net5.0</TargetFramework>
    <Nullable>enable</Nullable>
    <WarningsAsErrors>true</WarningsAsErrors>
</PropertyGroup>
```

### Add the required packages

Next, we will add the CodeAnalysis libraries from NuGet.

```xml
<ItemGroup>
    <PackageReference Include="Microsoft.CodeAnalysis.Analyzers" Version="3.3.2" />
    <PackageReference Include="Microsoft.CodeAnalysis.CSharp.Workspaces" Version="3.8.0" />
</ItemGroup>
```

## Consumer Project Properties

In the consumer project, we need to add a reference to the source generator. This can be done as either a project reference or a NuGet package.

### Reference the project in Debug mode

In Debug mode, we reference the project directly so that it's easier for development.

```xml
<ItemGroup Condition="'$(Configuration)'=='Debug'">
    <ProjectReference Include="..\\SourceGenerator\\SourceGenerator.csproj" OutputItemType="Analyzer" ReferenceOutputAssembly="false" />
</ItemGroup>
```

-   **_OutputItemType_**: Source generators as packaged and deployed the same way as Roslyn Analysers, so we need to tell the compiler that it is not a standard project reference.
-   **_ReferenceOutputAssembly_**: Tells the compiler not to include the source generator project in the published output, i.e. the bin folder.

### Reference the NuGet package in Release mode

In Release mode, we reference the NuGet package so that we can test the package.

```xml
<ItemGroup Condition="'$(Configuration)'=='Release'">
    <PackageReference Include="SourceGenerator" Version="x.y.z" />
</ItemGroup>
```

### Writing the generated code to disk

By default, the generated code is not written to disk. However, when writing a source generator, looking at the generated code can be helpful.

```xml
<PropertyGroup>
    <EmitCompilerGeneratedFiles>true</EmitCompilerGeneratedFiles>
    <CompilerGeneratedFilesOutputPath>GeneratedFiles</CompilerGeneratedFilesOutputPath>
</PropertyGroup>
```

-   **_EmitCompilerGeneratedFiles_**: This flag tells the compiler to write the generated files to disk
-   **_CompilerGeneratedFilesOutputPath_**: By default, the generated code is written to the **_obj/generated_** folder. This property allows us to override the folder. In this case, I am writing them to a GeneratedFiles folder

### Excluding the generated folder

We will need to exclude the generated folder, or the compiler will try to add the same file twice - one from disk and one from the code generator.

```xml
<ItemGroup>
    <Compile Remove="$(CompilerGeneratedFilesOutputPath)/*/**/*.cs" />
</ItemGroup>
```

## Conclusion

Now, we have our projects set up to start creating source generators and consuming the generated code.

If you want to look at the code, you can find it [here](https://github.com/AnkurSheel/CSharpSourceGenerators)
