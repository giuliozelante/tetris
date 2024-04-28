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
    //while (true) {
    console.log(this.grid);
    for (const block of this.blocks) {
      for (const [y, row] of this.grid.entries()) {
        if (this.checkCollision(row, y, block)) continue;
        for (const [x, cell] of row.entries()) {
          this.render(y, x, cell, block);
        }
        this.updateBlockPosition(block, this.grid.length);
        await sleep(1000);
        this.clearRows(y);
      }
    }
  }

  private updateBlockPosition(block: Block, gridHeight: number) {
    if (block.position.y !== gridHeight - 1) block.position.y++;
    console.log(block);
  }

  private clearRows(prevY: number) {
    for (const block of this.blocks)
      for (const [y, row] of this.grid.entries())
        for (const [x, cell] of row.entries())
          if (block.position.y !== y && y < prevY)
            cell.style.backgroundColor = 'transparent';
  }

  private checkCollision(
    row: HTMLTableCellElement[],
    y: number,
    block: Block
  ): boolean {
    if (block.position.y === y) return false;
    for (let i = block.position.x; i < block.shape[0].length; i++) {
      const cell = Array.from(row.values())[i];
      if (
        !cell.style.backgroundColor &&
        cell.style.backgroundColor !== 'transparent'
      ) {
        return true;
      }
    }
    return false;
  }

  update(deltaTime) {
    // Update game state
  }

  render(y: number, x: number, cell: HTMLTableCellElement, block: Block) {
    block.shape.forEach((rowBlock, blockY) => {
      rowBlock.forEach((cellBlock, blockX) => {
        if (cellBlock === 1 && block.position.y === y && blockX === x)
          cell.style.backgroundColor = block.color;
      });
    });
  }
}

// Usage:

const engine = new GameEngine();
engine.start();
