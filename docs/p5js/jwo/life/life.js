// Game of Life demonstrating simple cellular automata.
// Jo Wood 17th September 2021.

const NUM_ROWS = 50;
const NUM_COLS = 100;
const GRID_BORDER =100;    // Number of rows/cols of border cells not shown (to reduce visible impact of edge effects).

let grid = [];

const BORN1 = 3;            // Number of neighbours required to give birth to a new cell.
const STAY_ALIVE1 = 2;      // Number of neighbours required to stay alive.
const STAY_ALIVE2 = 3;      // Number of neighbours required to stay alive.

const BUNNIES = [
  [1, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 0, 0, 0]
];

const ROW_OFFSETS = [-1, -1, -1, 0, 0, 1, 1, 1];
const COL_OFFSETS = [-1, 0, 1, -1, 1, -1, 0, 1];

function setup() {
  createCanvas(800, 400);
  grid = new Array(NUM_ROWS+2*GRID_BORDER).fill(0).map(() => new Array(NUM_COLS+2*GRID_BORDER).fill(0));
  addPattern(BUNNIES, 25, 50);
  frameRate(10);
}

function draw() {
  background(255);

  const cellWidth  = (width-2)/NUM_COLS;
  const cellHeight = (height-2)/NUM_ROWS;

  fill(0, 200);
  stroke(255, 200);

  for (let row = GRID_BORDER; row<NUM_ROWS+GRID_BORDER; row++) {
    const screenY = 1 + (row-GRID_BORDER)*cellHeight;
    for (let col=GRID_BORDER; col<NUM_COLS+GRID_BORDER; col++) {
      if (grid[row][col] > 0) {
        const screenX = 1 + (col-GRID_BORDER)*cellWidth;
        rect(screenX, screenY, cellWidth, cellHeight);
      }
    }
  }
  evolve();
}


function addPattern(pattern, anchorRow, anchorCol) {
  for (let row=0; row<pattern.length; row++) {
    for (let col=0; col<pattern[0].length; col++) {
      grid[anchorRow+GRID_BORDER+row][anchorCol+GRID_BORDER+col] = pattern[row][col];
    }
  }
}

function evolve() {
  const newGrid = new Array(NUM_ROWS+2*GRID_BORDER).fill(0).map(() => new Array(NUM_COLS+2*GRID_BORDER).fill(0));

  for (let row = 0; row<NUM_ROWS+2*GRID_BORDER; row++) {
    for (let col=0; col<NUM_COLS+2*GRID_BORDER; col++) {
      const numNeighbours = countNeighbours(row, col);

      if (grid[row][col] === 1) {
        if ((numNeighbours === STAY_ALIVE1) || (numNeighbours === STAY_ALIVE2)) {
          newGrid[row][col] = 1;
        } else {
          // Cell dies due to under- or over- population.
          newGrid[row][col] = 0;
        }
      } else {
        if (numNeighbours === BORN1) {
          // New cell is born.
          newGrid[row][col] = 1;
        }
      }
    }
  }
  grid = newGrid;
}

function countNeighbours(row, col) {
  let numNeighbours = 0;

  for (let i=0; i<8; i++) {
    const otherRow = row+ROW_OFFSETS[i];
    const otherCol = col+COL_OFFSETS[i];

    if ((otherRow>=0) && (otherRow<grid.length) && (otherCol >=0) && (otherCol <grid[0].length)) {
      if (grid[otherRow][otherCol] >0) {
        numNeighbours++;
      }
    }
  }
  return numNeighbours;
}
