---
title: Creating Events
---
Flamework's networking is designed to be very simple, while still being secure and functional.

You simply have to write your TypeScript declarations, and then Flamework will do the rest for you, including generating type guards!

```ts
import { Networking } from "@flamework/networking";

// These events are listened to on the server, and called by the client.
interface ServerEvents {
	/**
	 * You can document events, and the documentation will be shown where ever the event is used!
	 */
	myServerEvent(param1: string, param2: number): void;
}

// These events are listened to on the client, and called by the server.
interface ClientEvents {
	/**
	 * You can document events, and the documentation will be shown where ever the event is used!
	 */
	myClientEvent(param1: string, param2: number): void;
}

// Simply call createEvent!
export const GlobalEvents = Networking.createEvent<ServerEvents, ClientEvents>();
```

The GlobalEvents object contains two fields, server and client. For usability reasons, it's generally recommended that you re-export each field in a server or client module, respectively. If you use the VSCode extension, only the correct import will show in intellisense.

```ts
import { GlobalEvents } from "shared/events";

// server/events.ts
export const Events = GlobalEvents.server;

// client/events.ts
export const Events = GlobalEvents.client;
```
