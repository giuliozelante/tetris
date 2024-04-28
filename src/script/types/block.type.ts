import type { Blocks } from './blocks.enum';
import type { Position } from './position.type';

export type Block = {
  name: Blocks.I | Blocks.L;
  shape: number[][];
  color: string;
  position: Position;
};
