---
id: "prioritymap"
title: "Class: PriorityMap<K, V>"
sidebar_label: "PriorityMap"
custom_edit_url: null
hide_title: true
---

# Class: PriorityMap<K, V\>

A map that can have multiple values for a single key, but only a single value ever gets returned.

The value returned will be the latest value with the highest priority.

## Type parameters

Name |
:------ |
`K` |
`V` |

## Constructors

### constructor

\+ **new PriorityMap**<K, V\>(): [*PriorityMap*](prioritymap.md)<K, V\>

#### Type parameters:

Name |
:------ |
`K` |
`V` |

**Returns:** [*PriorityMap*](prioritymap.md)<K, V\>

## Methods

### clear

▸ **clear**(): *void*

Deletes all members of the PriorityMap.

**Returns:** *void*

Defined in: map.ts:103

___

### delete

▸ **delete**(`key`: K, `context?`: *string*): *void*

Removes the specified key from the map.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`key` | K | - |
`context` | *string* | "Default" |

**Returns:** *void*

Defined in: map.ts:46

___

### forEach

▸ **forEach**(`cb`: (`value`: V, `key`: K, `arr`: [*PriorityMap*](prioritymap.md)<K, V\>) => *void*): *void*

Performs the specified action for each (element / pair of elements) in the Map

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`cb` | (`value`: V, `key`: K, `arr`: [*PriorityMap*](prioritymap.md)<K, V\>) => *void* | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each (element / pair of elements) in the array.    |

**Returns:** *void*

Defined in: map.ts:115

___

### get

▸ **get**(`key`: K): *undefined* \| V

Retrieves the value associated with a specific key.

#### Parameters:

Name | Type |
:------ | :------ |
`key` | K |

**Returns:** *undefined* \| V

Defined in: map.ts:24

___

### has

▸ **has**(`key`: K): *boolean*

Checks if this map has the specified key.

#### Parameters:

Name | Type |
:------ | :------ |
`key` | K |

**Returns:** *boolean*

Defined in: map.ts:60

___

### isEmpty

▸ **isEmpty**(): *boolean*

Checks if this map is empty.

**Returns:** *boolean*

Defined in: map.ts:131

___

### keys

▸ **keys**(): K[]

Returns the keys in this PriorityMap as an array.

**Returns:** K[]

Defined in: map.ts:81

___

### set

▸ **set**(`key`: K, `value`: V, `context?`: *string*, `priority?`: *number*): *void*

Associate a key to a value, taking into account the context and priority.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`key` | K | - |
`value` | V | - |
`context` | *string* | "Default" |
`priority` | *number* | 1 |

**Returns:** *void*

Defined in: map.ts:37

___

### size

▸ **size**(): *number*

Returns the size of the PriorityMap.

**Returns:** *number*

Defined in: map.ts:124

___

### toMap

▸ **toMap**(): *Map*<K, V\>

Converts a PriorityMap into a normal Map.

**Returns:** *Map*<K, V\>

Defined in: map.ts:67

___

### values

▸ **values**(): V[]

Returns the values in this PriorityMap as an array.

**Returns:** V[]

Defined in: map.ts:92
