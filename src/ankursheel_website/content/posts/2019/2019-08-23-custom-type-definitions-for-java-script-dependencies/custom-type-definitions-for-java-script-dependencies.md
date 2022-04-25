---
title: 'Create custom type definitions for JavaScript dependencies'
excerpt: 'What to do when you get a "Could not find a declaration file for module" error when the package does not exist in "@types/third-party-library-name" error'
coverImage: './cover.jpg'
category: "programming"
tags:
    - 'typescript'
    - 'tutorial'
    - 'web development'
---

If you are importing a javascript dependency into your typescript app, you might run into this error.

_**"Could not find a declaration file for module 'third-party-library-name'. 'third-party-library-name.js' has an 'any' type. Try npm install @@types/third-party-library-name if it exists or add a new declaration (.d.ts) file containing declare module 'third-party-library-name';"**_

If you read the error message, you can see that it suggests checking the DefinitelyTyped repository.

You will find the repository and install it using _npm_ or \_yarn_if you are lucky.

But what if you are not so lucky?

## Solution #1

Now, you will only see this error if you have `noImplicitAny: true` in your _tsconfig.json_. So you could get around this error is by setting `noImplicitAny: false`.

But, by doing this, you lose type-safety, so let's rule this out as a viable option.

## Solution #2

Add a local declaration file.

### Steps

So, how exactly do you do that?

-   Create a **_types_** folder.
-   Edit tsconfig.json to use the typeRoots property so that the compiler can find the local declaration files. You will need it to include both your local folder as well as _node_\__modules/@@types_. You will also want to check the local folder before the _node_\__modules_ folder.

```json
"compilerOptions": {
 ...
 "typeRoots": ["./types", "node_modules/@@types"]
    }
```

-   Add the property to exclude property in tsconfig so that it does not get compiled.

```json
"exclude": [..., "types"]
```

-   Add a **_third-party-library-name_** folder in the _types_ directory.
-   Add an _index.d.ts_ in that folder.
-   Add your TypeDefinitions. But if, like me, you want to prototype things or do not want to write a full custom type, you can declare the module by adding this to the _index.d.ts_ file.

```typescript
declare module 'third-party-library-name';
```

The only caveat is that you don't get any IntelliSense.

## Conclusion

Hopefully, this post will help you. You won't have to resort to either removing Typescript from your project or losing type-safety by adding `noImplicitAny: false` in your tsconfig.json.
