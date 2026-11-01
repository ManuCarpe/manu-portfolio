# Playground exports (Figma section "Playground" 252:6452) → this folder, PNG @2x

Every frame: `pNN.png` (p01 … p82). Missing files are simply skipped on the canvas.

## Frames with extra files
Export `pNN.png` with the listed layers HIDDEN, then each layer alone (visible) as named.

| Frame | Hide in pNN.png | Extra files |
|---|---|---|
| p13 | `animate` | `p13-a.png` = the `animate` frame |
| p14 | Frame 9029, Frame 9027, Frame 9028 (the 3 cards) | `p14-c1` = 9029 (Total data usage), `p14-c2` = 9027 (Service lines), `p14-c3` = 9028 (Terminals) |
| p15 | Frame 9028, 9031, 9029, 9030 (inside `animate`) | `p15-c1` = 9028, `p15-c2` = 9031, `p15-c3` = 9029, `p15-c4` = 9030 |
| p16 | Frame 9033, 9031, 9032, 9034 (the stacked cards) | `p16-c1` = 9033 (smallest/back) … `p16-c4` = 9034 (front) — c2 = 9031, c3 = 9032 |
| p24 | `animate` instance | `p24-v1` = instance as is, `p24-v2` = same instance switched to its second variant |
| p27 | `animate` instance (logo strip) | `p27-strip` = the `animate` instance |

## Long pages (scroll inside the card)
Turn OFF "Clip content" on the frame, export as `pNN-long.png`, turn it back on.
p26 → export the `Framer` child instead (it's the long page). p33, p35, p60, p70 → the frame itself.
(`pNN.png` isn't needed for these, but it's the fallback.)

Everything else (p11, p12, p17, p18, p32, p34, p38, p44, p45, p47, p58, p65, p68, p71, p77–p82)
animates in CSS on top of the plain `pNN.png`.
