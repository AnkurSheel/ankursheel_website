---
title: "Verifying Method Calls within a class using Mockito Spies"
excerpt: "How to reduce the redundancy in test scenarios when one one method calls another within the same class using Mockito spies"
category: "programming"
tags:
  - "testing"
  - "junit"
  - "mockito"
  - "snippet"

---

Among the many challenges we face when writing tests is the scenario where we find ourselves testing classes that are not just a collection of independent methods but a mesh of interconnected functionalities. Specifically, when one method calls another within the same class, the redundancy in testing scenarios can become a nuisance and a significant drain on our time and resources.

However, the world of testing has a solution up its sleeve: **_Mockito spies_**.

## Problem

Consider the following scenario:

You want to write tests for a class that contains two public methods. After looking at the code, you realise one method is essentially overloading the other and calling it without adding any additional logic.

Here's a simplified example to illustrate this:

```java
public class Service {
    public int getTotalPrice(int quantity) {
        // some other code like error checking, etc
        return 5 * quantity;
        
    }

    public int getTotalPrice() {
        return getTotalPrice(1);
    }
}
```

In the above example, the `getTotalPrice()` method without parameters calls the overloaded `getTotalPrice(int quantity)` method, supplying a default value.

In such cases, testing both methods independently for all possible scenarios would result in adding a lot of duplicated tests, leading to a cluttered test suite.

## Enter the World of Spies

Here's where Mockito spies come into the picture.

A spy acts as a wrapper around a real object, allowing us to override specific methods with mock behaviour while leaving others intact. This functionality proves invaluable when we need to verify the invocation of an actual method on an object.

Let's use Mockito spies to test our class and see how we can simplify our tests

```java
public class MyTests {
    @Test
    public void test() {
        Service spy = Mockito.spy(new Service());
        spy.getTotalPrice();
        verify(spy).getTotalPrice(1);
    }

    // more tests that test `getTotalPrice(int quantity)`
}
```

Let's break this down:

1. `Service spy = Mockito.spy(new Service())`:  We create a spy object by wrapping a new `Service` instance with Mockito's spy functionality. This spy object will delegate all method calls to the actual `Service` instance, except for those methods we explicitly mock.
2. `spy.getTotalPrice()`: We invoke the `getTotalPrice` method on the spy object.
3. `verify(spy).getTotalPrice(1)`: Using Mockito's `verify()` method, we ensure that the `getTotalPrice(int quantity)` method is invoked on the spy object with the argument `1`. If this method call did not happen as expected, the test would fail, alerting us to a potential issue in our method interaction.

## Conclusion

Testing every possible combination of method calls, not only consumes valuable time but also clutters your test suite with redundant tests.

Mockito spies offer a neat solution to this problem, allowing you to verify method interactions directly, thus focusing on the behavior rather than the implementation.

However, it's essential to use Mockito spies judiciously. Spies should primarily be used when you're testing a class's external behavior and its interactions with other classes or methods within itself. Overusing spies can lead to tests that are overly focused on the internal workings of a class, potentially making your tests brittle and less focused on the actual outcomes.

Happy testing, and may your code always perform as intended, both now and in the future.
