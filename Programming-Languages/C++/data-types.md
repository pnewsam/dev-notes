# C/C++ Basics

# main Function

Top-level function that runs the program.

In C:

```
int main(void)
{
  ...
  return 0;
}
```

In C++:

```
int main()
{
  ...
  return 0;
}
```

# Data Types

| Data type | Keyword  | Description                                 |
| --------- | -------- | ------------------------------------------- |
| int       | `int`    | Integer.                                    |
| float     | `float`  | Floating point number.                      |
| double    | `double` | Floating point number, twice the precision. |
| char      | `char`   | Character.                                  |

# Compound Assignment

Compound assignment operators include:

```
+=
-=
*=
/=
%=
<<=
>>=
&=
|=
^=
```

## Increment/Decrement Operators

Where the operator occurs determines whether it increments before or after assignment

Pre-increment

```
x = 1
y = ++x;
// y = 1, x == 2
```

Post-increment

```
x = 1
y = x++;
// y == 2, x == 2
```
