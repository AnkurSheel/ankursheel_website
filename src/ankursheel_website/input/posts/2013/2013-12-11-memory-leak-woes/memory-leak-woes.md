---
title: A guide to finding memory leaks using macros in C++
excerpt: Macro trickery to find the offending file(s) and line(s) causing Memory Leak(s) without using a commercial program.
tags:
    - snippet
    - tutorial
    - cpp
---

## Finding Memory Leaks

If you are not a big company, chances are you cannot afford the commercial programs to check for memory leaks in your program. This tutorial will give you a free alternative that you can add to your projects. The 1st thing that we need to do is to include _crtdbg.h_.

**Note:** _crtdbg.h_ should be added after all the other header files.

It would be nice to get the file and the line number that is causing the leak, To make debugging easier. Luckily, this can easily be done with some macro trickery.

```cpp
#ifdef _DEBUG
#define DEBUG_NEW new( _NORMAL_BLOCK, __FILE__, __LINE__)
#else
#define DEBUG_NEW new
#endif
```

The _*DEBUG*_ macro is defined only for **Debug** builds, ensuring that we don't get sub-par code by encasing the code in _#ifdef/#endif_ quotes code in our **Release** builds.

**NORMAL_BLOCK** is the ordinary memory allocated by our program. Alternatively, we can use **CLIENT_BLOCK**, a special type of memory block (typically used by MFC programs) for objects requiring a destructor.

**\__FILE_\_** and **\__LINE_\_** are predefined ANSI C macros that return the name of the current source file and the line number in the file, respectively.

Now, whenever we allocate memory using **DEBUG_NEW** (in Debug mode ), the **\__FILE_\_** and **\__LINE_\_** is automatically inserted by the pre-compiler into the _new operator_ call.

**_Note: We can override the new and delete functions to add our custom tracking methods. We just need to make sure they do what the old new/delete operator functions did._**

The only thing remaining is to set the debug flags to enable memory leak detection. Make sure you call this function at the start of your program.

```cpp
void CheckForMemoryLeaks()
{
#ifdef _DEBUG
    // Get Current flag
    int flag = _CrtSetDbgFlag(_CRTDBG_REPORT_FLAG) ;

    // Turn on leak-checking bit
    flag |= (_CRTDBG_ALLOC_MEM_DF | _CRTDBG_LEAK_CHECK_DF) ;

    // Set flag to the new value
    _CrtSetDbgFlag(flag) ;
#endif _DEBUG
}
```

The _\_CrtSetDbgFlag_ function allows the application to control how the debug heap manager tracks memory allocations. It does this by modifying the bit fields of the \_\_crtDbgFlag\* flag.

OR'ing the current _\_crtDbgFlag_ flag with _\_CRTDBG_ALLOC_MEM_DF | \_CRTDBG_LEAK_CHECK_DF_ and setting it, the program automatically calls _\_CrtDumpMemoryLeaks_ when the program exits.

The _\_CrtDumpMemoryLeaks_ function determines whether a memory leak occurred since the program execution. When a leak is found, the debug header information for all the objects in the heap is dumped in a user-readable form.

If you do not set _\_CRTDBG_\__LEAK_\__CHECK_\__DF_, you will need to call _\_CrtDumpMemoryLeaks_ yourself.

## Additional Reading

You can read more about the different flags [here](<http://msdn.microsoft.com/en-us/library/5at7yxcs(v=vs.71).aspx>)
