---
id: "prioritybool"
title: "Class: PriorityBool"
sidebar_label: "PriorityBool"
custom_edit_url: null
hide_title: true
---

# Class: PriorityBool

A wrapper around PriorityValue<boolean\>

## Hierarchy

* [*PriorityValue*](priorityvalue.md)<boolean\>

  ↳ **PriorityBool**

## Constructors

### constructor

\+ **new PriorityBool**(): [*PriorityBool*](prioritybool.md)

**Returns:** [*PriorityBool*](prioritybool.md)

Inherited from: [PriorityValue](priorityvalue.md)

## Methods

### clear

▸ **clear**(): *void*

Remove all contexts' values.

**Returns:** *void*

Inherited from: [PriorityValue](priorityvalue.md)

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

Inherited from: [PriorityValue](priorityvalue.md)

Defined in: value.ts:45

___

### disable

▸ **disable**(`context?`: *string*, `priority?`: *number*): *void*

Sets the underlying value to `false`

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`context` | *string* | "Default" |
`priority` | *number* | 1 |

**Returns:** *void*

Defined in: value.ts:80

___

### enable

▸ **enable**(`context?`: *string*, `priority?`: *number*): *void*

Sets the underlying value to `true`

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`context` | *string* | "Default" |
`priority` | *number* | 1 |

**Returns:** *void*

Defined in: value.ts:73

___

### get

▸ **get**(): *undefined* \| *boolean*

Retrieves the underlying value.

**Returns:** *undefined* \| *boolean*

Inherited from: [PriorityValue](priorityvalue.md)

Defined in: value.ts:13

___

### isEmpty

▸ **isEmpty**(): *boolean*

Check if this PriorityValue currently holds a value.

**Returns:** *boolean*

Inherited from: [PriorityValue](priorityvalue.md)

Defined in: value.ts:61

___

### set

▸ **set**(`value`: *boolean*, `context?`: *string*, `priority?`: *number*): *void*

Associate a value, taking context and priority into account.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`value` | *boolean* | - |
`context` | *string* | "Default" |
`priority` | *number* | 1 |

**Returns:** *void*

Inherited from: [PriorityValue](priorityvalue.md)

Defined in: value.ts:33
