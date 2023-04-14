---
title: "Don't Let Unused Methods Linger: A Better Approach to Feature Flags Cleanup"
excerpt: "Keep your codebase clean and organized with the FeatureFlagWillMakeThisObsolete annotation. Mark unused methods that can be safely deleted on feature flag cleanup a breeze. Say goodbye to clunky workarounds and technical debt"
coverImage: "./cover.png"
category: "programming"
tags:
- "java"
- "tutorial"
- "snippet"
- "code quality"

---

As part of introducing code behind Feature Flags, we sometimes refactor the old code into methods so that it's easier to consume. So far, so good.

However, when cleaning up the flag, there is a possibility of forgetting to delete this now-unused method (s). For me, it happens a lot more than I would like to admit. This results in unused code just lying around adding to the cruft.

_**Note:** We might also want to delete whole classes or just a field on cleanup, but for brevity, I am using "methods" in the article._

![obscure code with a X](./cover.png)

## Clunky Workarounds

### Clunky Workaround #1

We can use tools to automatically check for unused code in our code base and complain if any instances are found.

In my experience, such tools are slightly clunky in scenarios where nested methods must be removed. We need to manually check and delete other methods calling the original function or run multiple passes to make the check green.

It can also create friction if people are used to writing the methods first and then wiring them up later.

### Clunky Workaround #2

A potential step up is adding a comment inside the methods telling us to delete it when the flag is removed. But what if we don't search with the feature key at the time of cleanup or have a typo in the feature key inside the comment?

> What if we could make the compiler complain if we forgot to delete the unused method?

## Introducing the FeatureFlagWillMakeThisObsolete Annotation

We can create a new annotation, `FeatureFlagWillMakeThisObsolete`, that makes the compiler complain if an unused method is not deleted. This annotation can be added to the code using a string argument corresponding to the feature flag name.

```java
@Retention(RetentionPolicy.SOURCE)  
public @interface FeatureFlagWillMakeThisObsolete {
    String value();  
}
```

Since we don't need the annotation at runtime, we can add the retention policy as Source. We also want to be able to annotate anything so we do not add the `@Target` meta-annotation.

Since we still have to pass in a constant string, you might think this is no better than the comment workaround above, and you would be correct.

But if we refactor the flag name into a static final field, you can pass it into the annotation.

Example

```java
static final String MyFeatureFlagKey = "feature.key";`

@FeatureFlagWillMakeThisObsolete(MyFeatureFlagKey)
void deleteMe()
{
    // old code
}
```

Now, at cleanup time, all we have to do is remove `MyFeatureFlagKey`, and the compiler will complain until we remove all instances where it was being used.

## Advantages of the FeatureFlagWillMakeThisObsolete Annotation

The most significant advantage of this approach is that you can mark even the nested functions that should be deleted on cleanup. No looking in the IDE to find the unused functions one by one.

It centralizes where the raw string for the feature flag name is defined in the code base.

We also don't have to stop and look at the code at the cleanup time to decide whether it can be deleted or not. We had already made that decision when we were writing the code. It allows us (and the reviewer) to optimize for simple cleanup reviews.

We could also create custom plugins for our IDE(like IntelliJ) to automatically nuke the annotated methods.

## Caveats

It's not all a bed of roses, though. There are some things to keep in mind while using this annotation.

- The developer must remember to add the annotation when writing the code.
- Other developers need to treat this annotation similarly to `@Deprecated`. This requires education or making the developers add the `@Deprecated` annotation along with this.

## Conclusion

In conclusion, the `FeatureFlagWillMakeThisObsolete` annotation provides a practical solution for ensuring cleaner Feature Flags cleanup by marking unused methods that can be safely deleted.

This annotation has several advantages over the existing workarounds, including the ability to mark even nested functions and optimize for simple cleanups.

While it is important to remember to add the annotation when writing the code and ensure that other developers treat it similarly to `@Deprecated`, by implementing the `FeatureFlagWillMakeThisObsolete` annotation in our codebase, we can improve code quality, reduce technical debt, and make Feature Flag cleanup a breeze.
As part of introducing code behind Feature Flags, we sometimes refactor the old code into methods so that it's easier to consume. So far, so good.
