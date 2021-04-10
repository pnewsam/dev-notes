# Logic

## Definitions

- **proposition**: a statement with a true/false value
  - represented by values `p` and `q`
  - true is `T` or `1`, false is `F` or `0`
- **negation**: `¬p` == NOT `p`
- **conjunction**: `p ∧ q` == `p` AND `q`
- **disjunction**: `p ∨ q` == `p` OR `q`
- **implication**: `p -> q` == IF `p` THEN `q`

## Concepts

A **truth table** compare boolean values for various expressions.

| p   | q   | p -> q |
| --- | --- | ------ |
| T   | T   | T      |
| T   | F   | F      |
| F   | T   | T      |
| F   | F   | T      |

**Exclusive or** aka `XOR` is a connective commonly used in circuits. True when only one or the other is true.

| p   | q   | p ⊕ q |
| --- | --- | ----- |
| T   | T   | F     |
| T   | F   | T     |
| F   | T   | T     |
| F   | F   | F     |
