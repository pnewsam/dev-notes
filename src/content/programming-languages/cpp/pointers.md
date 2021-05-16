# Pointers

C/C++ are "pass by value" languages. This means that all functions create their own local copies of all arguments passed to them. This can be circumvented by passing pointers.

This means: "declare a pointer to an int called myVariable"

```
int *myVariable
```

When used again, the \* "dereferences" the pointer. Below, we are reading the value.

```
*myVariable
```
