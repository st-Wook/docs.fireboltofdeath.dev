---
title: Dependencies
---
This page will cover how to retrieve singletons from inside other singletons, or anywhere else in your code.

## Dependency Injection
The preferred way to get references to your singletons is by using dependency injection. Flamework uses a constructor-based DI system, which means you simply specify the dependencies in your constructor and Flamework will automatically pass them when creating the singleton.

```ts
import { OtherService } from "./otherService";

@Service()
export class MyService {
	constructor(private otherService: OtherService) {}

	method() {
		print(this.otherService.getName());
	}
}
```

## Dependency Macro
If you cannot, or do not want to, use dependency injection then you can use the Dependency macro. The macro will grab a reference to your singleton and can be called from anywhere in your code, not just in other singletons.

Some examples of where you may use the Dependency macro over DI:
* Utility functions
* Circular dependencies between singletons (although, not recommended)

There are two ways to call the macro, although they behave identically.
```ts
// Dependency<T>()
const myDependency = Dependency<MyDependency>();

// Dependency(T)
const myDependency = Dependency(MyDependency);
```
