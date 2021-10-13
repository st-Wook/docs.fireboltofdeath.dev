---
title: Client Events
---
A client event is an event which is listened to by a player and fired by the server. This will assume the `Events` is pointing to the corresponding Events import, as documented in the [Creating Events guide](/docs/flamework/additional-modules/networking/creating-events).

## Listening to events
An event isn't really that useful, if there's nothing to respond to it.
```ts
Events.on("myClientEvent", (param1, param2) => {
	// These assertions should never fail, as Flamework automatically generated the correct type guards.
	assert(typeOf(param1) === "string");
	assert(typeOf(param2) === "number");

	print(`The server sent me: '${param1}' and ${param2}`);
})
```

## Firing server events
The client is also able to fire registered server events.
```ts
Events.myServerEvent("This is a string!", 15);
```
