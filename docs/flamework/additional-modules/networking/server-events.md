---
title: Server Events
---
A server event is an event which is listened to by the server and fired by a player. This will assume the `Events` is pointing to the corresponding Events import, as documented in the [Creating Events guide](/docs/flamework/additional-modules/networking/creating-events).

## Listening to events
An event isn't really that useful, if there's nothing to respond to it.
```ts
Events.on("myServerEvent", (player, param1, param2) => {
	// These assertions should never fail, as Flamework automatically generated the correct type guards.
	assert(typeOf(param1) === "string");
	assert(typeOf(param2) === "number");

	print(`Player '${player.Name}' sent me: '${param1}' and ${param2}`);
})
```

## Firing client events
The server is able to fire registered client events in a few different ways.

### To a specific player
The server can fire an event only to a specific player.
```ts
// Shorthand for .fire()
Events.myClientEvent(player, "A string!", 15);
Events.myClientEvent.fire(player, "A string!", 15);
```

### To all players
The server can also fire an event that will be sent to every player in the server.
```ts
Events.myClientEvent.broadcast("A broadcast!", 20);
```

### To all players, excluding..
The server can also fire an event that will be sent to every player in the server, excluding one or several players.
```ts
Events.myClientEvent.except(player, "Excluding a single player!", 25);
Events.myClientEvent.except([player1, player2], "Excluding several players!", 25);
```
