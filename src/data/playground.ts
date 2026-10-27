// Playground: an endless canvas you can drag around. Layout from the Figma frame
// "Playground" (217:2549): three columns of work, 218px wide and 468px apart, repeated
// forever in both directions. Positions are Figma pixels; images live in
// src/assets/playground-v3/qNN.png (exported at 3×).
//
// To add a piece: drop qNN.png into src/assets/playground-v3, then add { k: 'qNN', y, h } to a
// column. Keep a 230px gap between pieces (y = previous y + previous h + 230).

export const tile = {
  /** Width of one repeat of the three columns */
  w: 1405,
  /** Card width */
  card: 218,
  /** Space between pieces in a column */
  gap: 230,
};

export type Piece = { k: string; y: number; h: number };

/** x = column position inside the tile; pieces top to bottom */
export const columns: { x: number; pieces: Piece[] }[] = [
  {
    x: 0,
    pieces: [
      { k: 'q01', y: 0, h: 206 },
      { k: 'q02', y: 436, h: 135 },
      { k: 'q03', y: 801, h: 283 },
      { k: 'q04', y: 1314, h: 207 },
      { k: 'q05', y: 1751, h: 135 },
      { k: 'q06', y: 2116, h: 283 },
      { k: 'q07', y: 2629, h: 134 },
      { k: 'q08', y: 2993, h: 301 },
    ],
  },
  {
    x: 468,
    pieces: [
      { k: 'q09', y: 0, h: 301 },
      { k: 'q10', y: 531, h: 206 },
      { k: 'q11', y: 967, h: 134 },
      { k: 'q12', y: 1331, h: 301 },
      { k: 'q13', y: 1862, h: 301 },
      { k: 'q14', y: 2393, h: 206 },
      { k: 'q15', y: 2829, h: 135 },
    ],
  },
  {
    x: 937,
    pieces: [
      { k: 'q16', y: 0, h: 206 },
      { k: 'q17', y: 436, h: 206 },
      { k: 'q18', y: 872, h: 135 },
      { k: 'q19', y: 1237, h: 301 },
      { k: 'q20', y: 1768, h: 135 },
      { k: 'q21', y: 2133, h: 205 },
      { k: 'q22', y: 2568, h: 283 },
      { k: 'q23', y: 3081, h: 134 },
    ],
  },
];

/** Height of one repeat of a column (last piece + gap) */
export const columnPeriod = (c: (typeof columns)[number]) => {
  const last = c.pieces[c.pieces.length - 1];
  return last.y + last.h + tile.gap;
};
