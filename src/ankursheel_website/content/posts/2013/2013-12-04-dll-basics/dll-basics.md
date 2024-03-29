---
title: How to start using Dynamic-link libraries (DLL)
excerpt: This post deals with the basic information you need to know to begin using DLL's.
category: "programming"
tags:
    - snippet
    - tutorial
    - cpp
---

Since we will be using DLL's to have 1 single copy of our engine code, let's understand the basics of DLL's. For those of you who are on the fence about whether to use a DLL or not. [Here](<http://msdn.microsoft.com/en-us/library/dtba4t8b(v=VS.90).aspx>) are some of the advantages of using a dll as per MSDN

We will be using **_\_\_declspec(dllexport)_** and **_\_\_declspec(dllimport)_** to export and import functions, data and objects to and from a DLL. We will mainly be using it to export/import functions or interface declarations and not member variables.

I prefer to have a header file that can encapsulate the above function calls. I will explain it with an example.

```cpp
#ifdef project_EXPORTS
#define project_API __declspec(dllexport)
#else
#define project_API __declspec(dllimport)
#endif
```

For the project from which we want to export functions, _project_\__EXPORTS_ macro will be defined so that _project_\__API_ automatically map to _\_\_declspec(dllexport)_. For all other projects, _project_\__API_ will map to _\_\_declspec(dllimport)_

Now for whichever interface we need to export all/the functions, all we need to do is include the above header and add the following code.

```cpp
class project_API className
{
};
```

This takes care of exporting/importing all the functions, member variables in the class _**className**_.
