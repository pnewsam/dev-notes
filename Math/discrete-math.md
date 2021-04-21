# Logic

## Definitions

- **proposition**: a statement with a true/false value
  - represented by values `p` and `q`
  - true is `T` or `1`, false is `F` or `0`
- **negation**: `¬p` == NOT `p`
- **conjunction**: `p ∧ q` == `p` AND `q`
- **disjunction**: `p ∨ q` == `p` OR `q`
- **implication**: `p -> q` == IF `p` THEN `q` (functionally, the complement to conjunction)
- **exclusive or**: aka `XOR` is a connective commonly used in circuits. True when only one or the other is true.

| p   | q   | p ∧ q | p ∨ q | p -> q | p ⊕ q |
| --- | --- | ----- | ----- | ------ | ----- |
| T   | T   | T     | T     | T      | F     |
| T   | F   | F     | F     | F      | T     |
| F   | T   | F     | T     | T      | T     |
| F   | F   | F     | F     | T      | F     |

A **truth table** (like above) compare boolean values for various expressions.

# Sequences

A sequence:

- Has "elements", "terms", or "members"
- Can be infinite or finite
- `a`<sub>`n`</sub> represents the nth term (can be zero-indexed)
- Can be represented with a function, for example:
  - `a`<sub>`n`</sub>` = 5n + 1` for `1, 6, 11, 16`
  - `a`<sub>`n`</sub>` = 2n`<sup>`2`</sup> ` + 1` for `3, 5, 9, 17, 33`

## Recursion

A sequence can also be represented recursively. For example, the above sequence `1, 6, 11, 16` can be represented thus:

`a`<sub>`n`</sub> = `a`<sub>`n - 1`</sub>` + 5`

## Arithmetic vs. Geometric

An arithmetic progression grows by addition.

- Recursive: `a`<sub>`n`</sub>` = a`<sub>`n - 1`</sub>` + d`
- Formula: `a`<sub>`n`</sub>` = a`<sub>`0`</sub>` + nd`

By contrast, a geometric progression grows by multiplication.

`a`<sub>`n`</sub>` = a`<sub>`n - 1`</sub>` × r = a`<sub>`0`</sub>` × r`<sup>`n`</sup>
