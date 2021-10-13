---
title: Introduction
hide_title: true
description: An introduction into Flamework
slug: /flamework
---
<center>
<img src="/img/flamework.png" style={{ "max-height": 180 }} />
<h1>Flamework</h1>
<h3>A TypeScript game framework designed for simplicity.</h3>
</center>

<br/>

## Why should I use it?

- It automatically generates type guards for your [networking code](/docs/flamework/additional-modules/networking/creating-events) and [components](/docs/flamework/additional-modules/components/creating-a-component).
- It has non-obtrusive [lifecycle events](/docs/flamework/guides/lifecycle-events), easy to opt-in to, but entirely optional.
- It supports [dependency injection](/docs/flamework/guides/dependencies) via [constructor](/docs/flamework/guides/dependencies#dependency-injection) or via a [macro](/docs/flamework/guides/dependencies#dependency-macro).
- It's designed to be extended, via the [modding API](/docs/flamework/modding/introduction). (wip)
- It splits parts of Flamework into several packages, so you only need to install what you wish to use.
- It's designed to minimize boilerplate and preserve simplicity.

### Structure
Flamework gives you the ability to structure your code through singletons, but does not restrict your ability to organize your codebase.
You can use singletons, networking, components and so on from anywhere in your codebase.

### How little boilerplate?
See for yourself, here's a bare minimum example of a service, which can be fetched or optionally hook into any [lifecycle events](/docs/flamework/guides/lifecycle-events).

```ts
@Service()
export class MyService {}
```
