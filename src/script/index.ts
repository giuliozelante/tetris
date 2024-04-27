// Game engine template

import { blocks } from './data/blocks';
import type { Block } from './types/block.type';
import { sleep } from './utils';

class GameEngine {
  private blocks: Block[] = [];
  private grid: HTMLTableCellElement[][] = [];
  constructor() {
    this.blocks = blocks;
    this.grid = Array.from(document.querySelectorAll('tr')).map((tr) =>
      Array.from(tr.querySelectorAll('td'))
    );
  }

  async start() {
    console.log(this.grid);
    //while (true) {
    for (const block of this.blocks) {
      for (const [y, row] of this.grid.entries()) {
        for (const [x, cell] of row.entries()) {
          for (const [blockY, blockRow] of Array.from(
            block.shape.entries()
          ).reverse()) {
            for (const [blockX, blockCell] of blockRow.entries()) {
              cell.style.backgroundColor =
                block.shape[blockY][blockX] === 1 ? block.color : 'transparent';
            }
          }
        }
        await sleep(1000);
      }
      //}
    }
  }

  update(deltaTime) {
    // Update game state
  }

  render() {
    // Render current frame
  }
}

// Usage:

const engine = new GameEngine();
engine.start();
