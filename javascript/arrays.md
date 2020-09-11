# Arrays

## Time Complexity of Array Methods

| Function                           | Required Operations                           | Time Complexity |
| ---------------------------------- | --------------------------------------------- | --------------- |
| `push()`                           | Update length, add item to tail               | `O(1)`          |
| `pop()`                            | Update length, remove tail item               | `O(1)`          |
| `shift()` (remove first item)      | Update item at 0, shift all items to left     | `O(n)`          |
| `unshift(value)` (insert at start) | Insert item at 0, shift all elements ot right | `O(n)`          |
| `delete`                           | Remove item, shifting elements if necessary   | `O(n)`          |
| `reverse`                          | Reverse items                                 | `O(n)`          |
