---
id: "priorityvalue"
title: "Class: PriorityValue<V>"
sidebar_label: "PriorityValue"
custom_edit_url: null
hide_title: true
---

# Class: PriorityValue<V\>

A container that holds multiple values while only exposing one.

The value returned will be the latest value with the highest priority.

## Type parameters

Name |
:------ |
`V` |

## Hierarchy

* **PriorityValue**

  ↳ [*PriorityBool*](prioritybool.md)

## Constructors

### constructor

\+ **new PriorityValue**<V\>(): [*PriorityValue*](priorityvalue.md)<V\>

#### Type parameters:

Name |
:------ |
`V` |

**Returns:** [*PriorityValue*](priorityvalue.md)<V\>

## Methods

### clear

▸ **clear**(): *void*

Remove all contexts' values.

**Returns:** *void*

Defined in: value.ts:53

___

### delete

▸ **delete**(`context?`: *string*): *void*

Remove the specified context's value.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`context` | *string* | "Default" |

**Returns:** *void*

Defined in: value.ts:45

___

### get

▸ **get**(): *undefined* \| V

Retrieves the underlying value.

**Returns:** *undefined* \| V

Defined in: value.ts:13

___

### isEmpty

▸ **isEmpty**(): *boolean*

Check if this PriorityValue currently holds a value.

**Returns:** *boolean*

Defined in: value.ts:61

___

### set

▸ **set**(`value`: V, `context?`: *string*, `priority?`: *number*): *void*

Associate a value, taking context and priority into account.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`value` | V | - |
`context` | *string* | "Default" |
`priority` | *number* | 1 |

**Returns:** *void*

Defined in: value.ts:33
