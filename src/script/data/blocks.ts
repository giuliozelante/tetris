import type { Block } from '../types/block.type';
import { Blocks } from '../types/blocks.enum';

export const blocks: Block[] = [
  {
    name: Blocks.I,
    shape: [[1, 1, 1, 1]],
    color: 'cyan',
  },
  {
    name: Blocks.L,
    shape: [
      [1, 0, 0],
      [1, 1, 1],
    ],
    color: 'blue',
  },
];
