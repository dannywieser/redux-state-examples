# Redux State Examples

Quick react/redux prototype showing ways to eliminate extra rendering for lists when the contents of the list includes items that will be updated after the initial render of the list itself. i.e. imagine a list where we know there are 100 items but the detail for those items are retrieved from an async API.

# Prototype Components

## ListBoundToMap:

The list is stored as a map keyed by the item ID, and the react component renders itself based on a direct state link to the map.

## ListBoundToArray:

The state has an added "allIds" property, which is an array that contains only the IDs of the items.

## ListBoundToSelector

The state is bound to a selector that returns only the item keys.

# Results:

- ListBoundToMap: the list and all items are re-rendered each time any item in the map is updated
- ListBoundToArray: the list is rendered only once, as each item is updated it is rendered again
- ListBoundToSelector: the list is rendered every time the selector updates, but only the updated item is re-rendered.

# Conclusion

The selector is probably the best option of the 3 because it prevents the need to keep the array in the store but still prevents the list items from being re-rendered too often.
