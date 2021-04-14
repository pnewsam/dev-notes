# Console Input/Output

# C

In C, the function `printf` is used. The first argument ie. `printf("%i", ...)` determines the formatting of the output.

| Symbol | Format               |
| ------ | -------------------- |
| %c     | `char`               |
| %i     | `int` in decimal     |
| %o     | `int` in octal       |
| %x     | `int` in hexadecimal |
| %c     | `char`               |
| %hi    | `short int`          |
| %e     | `float` or `double`  |
| %Le    | `long double`        |

Additionally:

- `l` can be prepended for `long` and `ll` can be prepended for `long long`.
- `u` can be prepended (or replace `i`) to indicate unsigned.

These result in such combinations as: `%Le`

```C
printf("%i", 15)    // Prints 15
printf("%c", 'T')    // Prints T
```

# C++

In C++, `cout <<` is used istead of `printf(...)`.

The following keywords can be used to specify the format of the output

| Keyword | Type        |
| ------- | ----------- |
| `dec`   | decimal     |
| `oct`   | octal       |
| `hex`   | hexadecimal |

```C++
cout << dec << 15    \\ Prints 15
cout << oct << 15    \\ Prints 17
cout << hex << 15    \\ Prints f
```

Console input is taken using the keyword `cin >>`.

```C++
cin >> dec >> ch    \\ Stores decimal value in the variable ch
```
