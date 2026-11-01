// Playground pieces (Figma "Playground" section 252:6452, file 0SSOVZNSiHsvBH6yEBxMME).
// Every frame pNN is exported to src/assets/playground-v4/pNN.png (any scale; 2× is plenty).
// Pieces without a file are skipped, so the canvas works while exports are still coming in.
//
// Animated frames add extra files — see ANIM below. All rects are Figma px inside the frame:
// [x, y, w, h]. For frames with `layers`, export pNN.png with those layers HIDDEN, then each
// layer on its own as pNN-<key>.png. For `scroll`, export pNN-long.png with the frame's
// "Clip content" turned off (rect = the overflowing content). Pulses, rings, dots, glow, rows
// and sheen are drawn in CSS and need no extra file.

/** Frame sizes in Figma px */
export const frames: Record<string, [number, number]> = {
  p01: [786.0, 500.0],
  p02: [540.0, 607.0],
  p03: [452.0, 643.0],
  p04: [850.0, 650.0],
  p05: [1084.0, 501.0],
  p06: [787.3, 1024.0],
  p07: [779.0, 584.2],
  p08: [779.0, 584.2],
  p09: [779.0, 584.2],
  p10: [779.0, 584.2],
  p11: [779.0, 584.2],
  p12: [779.0, 584.2],
  p14: [468.6, 491.4],
  p13: [468.6, 1014.0],
  p15: [468.6, 491.4],
  p16: [468.6, 491.4],
  p17: [468.6, 491.4],
  p18: [468.6, 491.4],
  p21: [549.7, 558.0],
  p22: [437.0, 410.9],
  p19: [621.0, 369.9],
  p23: [831.9, 643.2],
  p24: [831.9, 444.3],
  p25: [831.9, 387.1],
  p20: [905.4, 643.8],
  p26: [727.9, 563.7],
  p27: [663.0, 392.0],
  p28: [408.1, 544.1],
  p29: [408.1, 544.1],
  p31: [408.1, 544.1],
  p30: [816.2, 544.1],
  p32: [1085.4, 753.0],
  p37: [1167.2, 658.4],
  p34: [982.4, 593.9],
  p41: [312.2, 676.0],
  p42: [312.2, 676.0],
  p43: [312.2, 676.0],
  p49: [972.7, 729.5],
  p44: [312.2, 676.0],
  p45: [312.2, 676.0],
  p47: [228.0, 493.6],
  p48: [1167.2, 656.6],
  p39: [1167.2, 676.0],
  p33: [1167.2, 1565.4],
  p40: [1167.2, 1223.7],
  p58: [326.1, 705.7],
  p59: [326.1, 705.7],
  p57: [326.1, 705.7],
  p60: [326.1, 705.7], // Figma frame is now 326 × 1281 — re-export p60.png, then update
  p46: [1167.2, 656.6],
  p36: [961.7, 469.3],
  p35: [1167.2, 1404.9],
  p50: [1215.8, 911.9],
  p52: [1215.8, 911.9],
  p53: [1215.8, 911.9],
  p51: [1215.8, 911.9],
  p54: [972.7, 729.5],
  p55: [972.7, 729.5],
  p56: [972.7, 1628.6],
  p38: [1167.2, 1490.0],
  p61: [326.1, 705.7],
  p62: [326.1, 705.7],
  p63: [326.1, 705.7],
  p75: [326.1, 1206.5],
  p74: [326.1, 705.7],
  p82: [313.5, 678.9],
  p78: [336.1, 730.7],
  p77: [336.1, 730.7],
  p64: [326.1, 705.7],
  p80: [313.5, 678.9],
  p79: [313.5, 678.9],
  p67: [326.1, 705.7],
  p71: [326.1, 705.7],
  p76: [326.1, 705.7],
  p72: [326.1, 705.7],
  p69: [326.1, 705.7],
  p68: [326.1, 705.7],
  p66: [326.1, 705.7],
  p81: [336.1, 730.7],
  p65: [326.1, 1673.0],
  p70: [326.1, 705.7],
  p73: [326.1, 705.7],
  p83: [1359.5, 1019.6],
  p84: [1223.6, 1200.6],
  p85: [1223.6, 797.0],
  p86: [1160.7, 870.1],
  p87: [1359.5, 1019.6],
  p88: [1468.3, 949.1],
  p89: [1468.3, 949.1],
  p90: [1631.4, 917.7],
  p91: [833.6, 1164.1],
  p92: [1359.5, 1019.6],
  p93: [1464.0, 2227.0],
  p94: [1866.0, 1399.5],
};

export type Fx = 'reveal' | 'rise' | 'pop' | 'roll' | 'swapA' | 'swapB' | 'marquee';
type Rect = [number, number, number, number];
export type Anim = {
  layers?: [key: string, x: number, y: number, w: number, h: number, fx: Fx, delay: number][];
  scroll?: Rect;
  pulses?: Rect[];
  dots?: Rect[];
  glow?: Rect[];
  rows?: Rect[];
  /** concentric rings: centre x, centre y, outer radius */
  rings?: [number, number, number];
  sheen?: boolean;
};

export const ANIM: Record<string, Anim> = {
  // p13-a is exported at the frame's full width (its arcs run to the edges)
  p13: { layers: [['a', 0, 146.6, 468.6, 553.5, 'reveal', 0]] },
  p14: {
    layers: [
      ['c1', 193.4, 61.3, 207.8, 59.5, 'rise', 0],
      ['c2', 44.5, 221.1, 207.8, 63.8, 'rise', 0.5],
      ['c3', 201.8, 341.2, 207.8, 63.8, 'rise', 1],
    ],
    dots: [
      [318.4, 216.3, 18.2, 20.4],
      [281.1, 152.6, 25.3, 26.3],
      [122.5, 143, 25.3, 26.3],
      [102.3, 194.3, 20.2, 22.2],
      [111.9, 308.6, 27, 27.3],
    ],
  },
  p15: {
    layers: [
      ['c1', 162.3, 82.9, 105.4, 72.8, 'pop', 0],
      ['c2', 50.5, 162.2, 105.4, 72.8, 'pop', 0.35],
      ['c3', 181.3, 197, 105.4, 72.8, 'pop', 0.7],
      ['c4', 330.9, 133.4, 105.4, 72.8, 'pop', 1.05],
    ],
    pulses: [
      [124.9, 150, 157.5, 71.1],
      [302.8, 197, 157.5, 71.1],
      [4.8, 230.7, 157.5, 71.1],
      [157.4, 259.7, 157.5, 71.1],
    ],
  },
  p16: {
    layers: [
      ['c1', 137, 164.6, 195.6, 38.2, 'roll', 0],
      ['c2', 102.4, 191, 264.7, 51.7, 'roll', 0.25],
      ['c3', 66.1, 224.7, 336.5, 65.7, 'roll', 0.5],
      ['c4', 37.3, 267.9, 393.9, 101.7, 'roll', 0.75],
    ],
  },
  // p27-strip is one loop of the logo strip: 16 items, 91px apart (cut just before the
  // sectional sofa comes round again, so the two copies join without a seam)
  p27: { layers: [['strip', -214.65, 201.9, 1456.3, 71.68, 'marquee', 0]] },
  p34: { glow: [[71.7, 195.1, 380.6, 105.8]] },
  p11: {
    pulses: [
      [508, 297, 15, 9],
      [399, 333, 15, 9],
      [651, 426, 15, 9],
      [627, 315, 15, 9],
    ],
    sheen: true,
  },
  p32: { pulses: [[256, 376, 25, 7]], sheen: true },
  p68: {
    rows: [
      [0, 411, 326, 69],
      [0, 480, 326, 69],
      [0, 549, 326, 70],
    ],
  },
  p77: { rings: [167, 365, 352] },
  p78: { rings: [167, 88, 352] },
  p81: { rings: [167, 88, 352] },
  p26: { scroll: [0, -470, 727.9, 3741] },
  p33: { scroll: [0, 0, 1167.2, 3828.6] },
  p35: { scroll: [0, 0, 1167.2, 3318.6] },
  p12: { sheen: true },
  p17: { sheen: true },
  p18: { sheen: true },
  p38: { sheen: true },
  p44: { sheen: true },
  p45: { sheen: true },
  p47: { sheen: true },
  p58: { sheen: true },
  p65: { sheen: true },
  p71: { sheen: true },
  p79: { sheen: true },
  p80: { sheen: true },
  p82: { sheen: true },
};

/** Card width and gap in Figma px of the 3008 frame (same as before) */
export const tile = { card: 218, gap: 230, colGap: 468, cols: 3 };
