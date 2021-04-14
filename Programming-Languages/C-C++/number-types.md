# Number Types

## Integers

Possible data types for numbers in C/C++ (in order of increasing value ranges) are shown below. A few things to note:

- When declared, they are signed by default. IOW: `char x` will mean `signed char int`, not `unsigned char int`.
- `char` and `short` are known as "sub-integers"
- `short` and `int` may have the same size, but it is guaranteed that int is equal to or bigger than short int.

| Type                      | Represented with At Least: | Signed Range                                | Unsigned Range                  |
| ------------------------- | -------------------------- | ------------------------------------------- | ------------------------------- |
| `char`                    | 8 bits                     | -127 to 127                                 | 0 to 255                        |
| `short` (aka `short int`) | 16 bits                    | -32,767 to 32,767                           | 0 to 65,535                     |
| `int`                     | 16 bits                    | -32,767 to 32,767                           | 0 to 65,535                     |
| `long`                    | 32 bits                    | -2,147,483,647 to 2,147,483,647             | 0 to 4,294,967,295              |
| `long long`               | 64 bits                    | -9,223,372,036,854,775,807 to same positive | 0 to 18,446,744,073,709,551,615 |

Integer literals may also be used, and can be written in decimal, octal, or hexadecimal with an optional suffix of `U` or `L` or `LL`, meaning unsigned, long, and long long respectively.

Data type ranges may be specified in a header file (`<limits.h>` for C or `<climits>` for C++). For example:

```C++
#define CHAR_BIT 8
#define CHAR_MAX 127
#define CHAR_MIN (-127)
```

## Floating Point Numbers

Floating point numbers are as below.

| Type                       | Commonly represented with: | Range                                   | Typical Precision |
| -------------------------- | -------------------------- | --------------------------------------- | ----------------- |
| `float`                    | 32 bits                    | -10<sup>38</sup> to 10<sup>38</sup>     | 7 digits          |
| `double` (aka `short int`) | 64 bits                    | -10<sup>308</sup> to 10<sup>308</sup>   | 15 digits         |
| `long double`              | 64 or 80 bits              | -10<sup>4932</sup> to 10<sup>4932</sup> | 19 digits         |

## Integer Division

Integer division with negative values can be problematic. The result is either rounded down or up, depending on implementation.

## Performance Considerations

- Negation: should be done thus: `x = -x`
- Powers: Function calls are less efficient than basic operations. Therefore it's more efficient to do: `x * x * x * x` than it is to call a power function.
- Integer vs. Float: Floating point operations are less performant than integer operations. If at all possible, use integer operations and convert to floats at the end.

## Random Values

- `rand` or `srand` can be used to generate a random number. (`srand` uses a variable `seed` based on the current time.)
- Use modulo `%` to get a random value within a range, ie.: `result = rand(); result %= 25`

## Type Conversions

- C/C++ are weakly-typed, meaning that types are not checked and enforced at compile time.
- `target = source` will automatically convert `source` to `target` before assignment occurs.
- Type casting can be done to eliminate "Loss of precision" warnings. Use a type as a function.

C:

```C
(int)43.5
```

C++ alternative:

```C++
int(43.5)
```

## sizeof

`sizeof` is an operator that returns the number of in the operand.

```
sizeof(char)    // 1
sizeof(short)    // 2
```

- 2.13 what a macro is: macro name, replacement list
