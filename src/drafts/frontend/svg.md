# SVG

## Resources

- CSS Tricks Scale SVG: https://css-tricks.com/scale-svg/

## Viewbox/Viewport

The viewbox attribute defines the viewport (an internal coordinate system) of the SVG. The values represent: `min-x min-y width height` respectively.

```
<svg viewBox="0 0 100 100">
```

- The viewport has dimensions `width * height` and `(min-x, min-y)` represents the origin (top-left corner).
- If `viewBox="-50 -50 100 100"`: the viewport is `100 by 100`, and the top-left corner will have the coordinates `(-50, -50)`, making the bottom-right corner` (+50, +50)`.
