---
title: Middleware
---

Middlewares are functions that get called before the listener to any event. It's able to drop requests, delay requests or change the parameters prior to listeners being called. Flamework does not bundle any middleware by default.

Example use cases for middleware:
* Stricter type checks (for types that can't be represented via TypeScript, e.g constrained numbers)
* Ratelimiting (drop or delay requests that go over a certain threshold)
* Blocking unauthorized requests before they reach the listener
* Logging

## Defining a custom middleware
The following middleware passes requests based on a % chance.

Changing the Input type in MiddlewareFactory will change what events this middleware is allowed on. For example, passing `string[]` would only allow the middleware to be attached to events where all parameters are strings. Using a generic as shown below will allow you to use the middleware on any event, but prevents you from modifying/using the parameters without a type guard.

The processNext function is used to tell Flamework to process the next middleware or fire listeners if there's none left.

The event object contains information about the event that the middleware is attached to. Currently, this is only the name of the event.
```ts
function randomChanceMiddleware<I extends Array<unknown>>(chances: number): Networking.MiddlewareFactory<I> {
	return (processNext, event) => {
		print("Loaded middleware for", event.name);
		return (player, ...args) => {
			if (math.random() < chances / 100) {
				processNext(player, ...args);
			}
		};
	};
}
```

## Using middleware
To use a middleware, you simply register it in your createEvent call.

```ts
export const GlobalEvents = Networking.createEvent<ServerEvents, ClientEvents>(
	// server events
	{
		myServerEvent: [randomChanceMiddleware(50)]
	},
	// client events
	{
		myClientEvent: [randomChanceMiddleware(25)]
	}
);
```
