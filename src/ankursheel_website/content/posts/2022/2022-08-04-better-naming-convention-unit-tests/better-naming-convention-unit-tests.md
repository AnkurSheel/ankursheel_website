---
title: "A better naming convention for unit tests"
excerpt: "There are a lot of problems with the most common naming convention(MethodName_Scenario_ExpectedResult) for unit test. Let's look at a naming convention that improves test readability"
category: "programming"
tags:

- "testing"

---
I have been writing unit tests for quite some time now and have seen and tried a lot of naming conventions.

One of the most common conventions I have seen is `MethodName_Scenario_ExpectedResult`, or one of its many variations.

Here

- **MethodName**: is the name of the method you want to test.
- **Scenario**: the condition under which you test the method.
- **ExpectedResult**: the expected result from the method under test to do in the specified scenario.

An example of this naming convention is `IsOrderValid_NoProducts_ReturnsFalse`. If you can't tell, this test check verifies that an order is invalid if it has no products.

## Problems with the MethodName_Scenario_ExpectedResult naming convention

This convention does not help with test readability.

Focusing on the implementation details instead of the behaviour makes it harder for a non-programmer to read and understand. Even though a programmer could decipher the name, it will take a few brain cycles to figure out precisely what the test is testing and how it relates to the business requirements.

Another disadvantage of this convention is that it is tightly coupled to the method name. If the method name changes as part of refactoring, then the test name must also be updated. This affects the maintainability of the test suite.

## A better alternative

Let's contrast this with the test name written in plain English, `Order_with_no_products_is_invalid`.

This version describes one of the aspects of the application behaviour under test using terms a non-programmer would understand.

It conveys the behaviour of the system instead of the implementation details. It describes the _**what-to**_ not the **_how-to_**.

It avoids code smells because it is decoupled from the method name.

One nice side benefit of using this naming convention is that our tests can now be treated as a form of documentation.

_The underscores make long test names more readable._

## Unit test naming guidelines

- A non-programmer such as a business analyst should be able to understand what the test is verifying at a glance, i.e. the test name should be in plain English
- Separating words by underscores increases the readability of long names
- Don't include the name of the SUT's method in the test's name
- The test class name can indicate the unit of behaviour you are verifying.
