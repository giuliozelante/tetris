import type { Blocks } from './blocks.enum';

export type Block = {
  name: Blocks.I | Blocks.L;
  shape: number[][];
  color: string;
};
