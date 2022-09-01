# Variables

## var, let, const

`var` is function-scoped, and can be redeclared

```
function example() {
  if (true) {
    var x = 1;
  }
  console.log(x);
  // x is defined, not so with let/const
}

var x = 1;
// global scope
var x = 2;
// can be redeclared and reassigned
```

`const` and `let` are block-scoped.
`const` cannot be reassigned or redeclared.
`let` can be reassigned but not redeclared.
