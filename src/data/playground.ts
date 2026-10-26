// Playground layout, taken from the Figma frames "playground Grid view" (188:52)
// and "playground freeflow view" (188:354). Images live in src/assets/playground/pXX.png.
//
// To add a piece: drop pNN.png into src/assets/playground, add it to a column in `grid`,
// and (optionally) give it a spot on the freeflow canvas in `freeflow`.

/** Grid view: six columns, top to bottom (Figma repeats columns 1–3 as 4–6). */
export const grid: string[][] = [
  ['p01', 'p02', 'p03', 'p04', 'p05', 'p06', 'p07', 'p08'],
  ['p09', 'p10', 'p11', 'p12', 'p13', 'p14', 'p15'],
  ['p16', 'p17', 'p05', 'p18', 'p19', 'p20', 'p21', 'p22'],
  ['p01', 'p02', 'p03', 'p04', 'p05', 'p06', 'p07', 'p08'],
  ['p09', 'p10', 'p11', 'p12', 'p13', 'p14', 'p15'],
  ['p16', 'p17', 'p05', 'p18', 'p19', 'p20', 'p21', 'p22'],
];

/** Freeflow canvas size and card positions, in Figma pixels (canvas is 2975 × 4200). */
export const canvas = { w: 2975, h: 4200 };
export const cardWidth = 225.44;

export const freeflow: { k: string; x: number; y: number }[] = [
  { k: 'p01', x: 836.86, y: 2090.71 },
  { k: 'p02', x: 452.37, y: 2326.08 },
  { k: 'p03', x: 2474.49, y: 2748.82 },
  { k: 'p04', x: 1864.49, y: 1028.99 },
  { k: 'p05', x: 1172.71, y: 657.26 },
  { k: 'p06', x: 2220.56, y: 2997.63 },
  { k: 'p07', x: 633.69, y: 691.16 },
  { k: 'p08', x: 882.42, y: 1972.16 },
  { k: 'p09', x: 1268.73, y: 3204.04 },
  { k: 'p10', x: 225.7, y: 3977.35 },
  { k: 'p11', x: 215.98, y: 248.45 },
  { k: 'p12', x: 1225.08, y: 170.06 },
  { k: 'p13', x: 1010.99, y: 1066.53 },
  { k: 'p14', x: 570.72, y: 3475.39 },
  { k: 'p15', x: 1285.64, y: 1211.85 },
  { k: 'p16', x: 227.49, y: 3977.35 },
  { k: 'p17', x: 297.38, y: 3908.61 },
  { k: 'p05', x: 2749.6, y: 4048.55 },
  { k: 'p18', x: 462.99, y: 1042.25 },
  { k: 'p19', x: 560.28, y: 964.88 },
  { k: 'p20', x: 1384.32, y: 2884.69 },
  { k: 'p21', x: 295.64, y: 411.29 },
  { k: 'p22', x: 2441.21, y: 149.46 },
  { k: 'p01', x: 2096.5, y: 82.14 },
  { k: 'p02', x: 1168.82, y: 1522.09 },
  { k: 'p03', x: 922.11, y: 588.35 },
  { k: 'p04', x: 2137.64, y: 3710.66 },
  { k: 'p05', x: 2343, y: 317.83 },
  { k: 'p06', x: 2165.33, y: 917.22 },
  { k: 'p07', x: 22.97, y: 979.75 },
  { k: 'p08', x: 2444.7, y: 498.39 },
  { k: 'p09', x: 1193.3, y: 474 },
  { k: 'p10', x: 2448.25, y: 2561.61 },
  { k: 'p11', x: 1406.91, y: 294.77 },
  { k: 'p12', x: 2006.39, y: 2562.58 },
  { k: 'p13', x: 2699.93, y: 1692.97 },
  { k: 'p14', x: 417.42, y: 1573.21 },
  { k: 'p15', x: 2749.6, y: 2875.88 },
  { k: 'p16', x: 747.02, y: 3137.31 },
  { k: 'p17', x: 2749.6, y: 430.47 },
  { k: 'p05', x: 905.76, y: 3659.42 },
  { k: 'p18', x: 778.41, y: 3661.22 },
  { k: 'p19', x: 2440.78, y: 785.88 },
  { k: 'p20', x: 2749.6, y: 615.11 },
  { k: 'p21', x: 192.99, y: 2140.57 },
  { k: 'p22', x: 1306.64, y: 2208.29 },
];
