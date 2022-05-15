---
title: User Macros
---
User macros are custom Flamework-style macros that can be defined by user code. They allow you to tap into metadata about type parameters and the call site.

## Defining a user macro
You define a macro simply by using the `@metadata macro` jsdoc and using one of Flamework's utility types as a parameter. You can also pass down generics from other user macros into this macro by passing a Modding.Generic/Caller with the necessary metadata.

This can be defined on methods, classes (for `new A()`) and is also supported everywhere that the `@metadata` tag is, e.g in lifecycle events.
```ts
/** @metadata macro */
function macro<T>(abc?: Modding.Generic<T, "id">, xyz?: Modding.Caller<"line" | "char">) {
	assert(abc && xyz);

	print(abc.id, `${xyz.line}:${xyz.char}`);
}

macro<MyInterface>();
```

## Nesting user macros
If you have a user macro that you'd like to call from within another user macro, you can pass down the `Modding.Generic/Caller` objects as long as they have the necessary metadata.
```ts
/** @metadata macro */
function baseMacro<T>(abc?: Modding.Generic<T, "id">) {}

/** @metadata macro */
function newMacro<T>(param: string, abc?: Modding.Generic<T, "id" | "text">) {
	// do something with abc.text
	return baseMacro<T>(abc);
}
```

## Generic Metadata
You can access generic metadata by using `Modding.Generic<T, M>`. `T` does not have to be a type parameter and could contain any type, e.g `keyof T` or `{ [k in keyof T]: string }`.

### id
The ID of the `T`.

### guard
An automatically generated type guard for `T`. This function is also typed as `t.check<T>` meaning you can use it without casting.

### text
The text equivalent of `T`.

## Callsite Metadata
You can access callsite metadata by using `Modding.Caller<M>`. Metadata about the source text ignores leading and trailing trivia.

### line
The line number that this call is on, starting at 1.

### char
The character that this call is on, starting at 1.

### width
The length of the expression's text.

### text
The text of the expression.

### uuid
A randomly generated universally unique identifier. This can be used to identify a specific callsite.
