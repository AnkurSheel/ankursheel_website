---
title: How to prevent the compiler from copying an object in cpp
excerpt: In this C++ tutorial, we see an easy way to prevent the compiler from making objects, i.e. non-copyable objects.
category: "programming"
tags:
    - snippet
    - tutorial
    - cpp
---

Sometimes, you want to prevent the compiler from making objects. However, in C++, a copy of an object can be made in many situations. The most obvious is a direct assignment. Less obvious but equally valid is a function call using pass-by-value.

Copying in C++ is handled in two ways.

-   the copy assignment operator; and
-   the copy constructor

Unfortunately, if the class definition does not explicitly declare a copy constructor or a copy assignment operator, the compiler provides an implicit version which is a public member function.

If we want to make a class non-copyable, we can simply define its **copy constructor** and **copy assignment operator** as private members. But, it makes more sense to have a **non-copyable base class**.

If a class derives from the non-copyable base class, it too will be non-copyable. This is because the copy of an object of a derived class must necessarily invoke the copy constructor or the copy assignment operator of its base class.

```cpp
namespace Base
{
  class cNonCopyable
  {
  public:
    virtual ~cNonCopyable(){}

  protected:
    cNonCopyable(){}

  private:
    cNonCopyable(const cNonCopyable&);
    cNonCopyable& operator =(const cNonCopyable&);
  };
}
```

By making the copy constructor or copy assignment operator private, we ensure that the derived class is non-copyable. We ensure that the compiler does not provide its own versions by providing the declaration and not implementing them. A linking error is generated if used anywhere in the program.
