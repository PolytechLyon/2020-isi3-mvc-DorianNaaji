import {
  GAME_SIZE,
  CELL_STATES,
  DEFAULT_ALIVE_PAIRS,
  RENDER_INTERVAL
} from "./constants";

export class Model {
  constructor(callback) {
    this.callback = callback;
    this.width = GAME_SIZE;
    this.height = GAME_SIZE;
    this.raf = null;
  }

  init() {
    this.state = Array.from(new Array(this.height), () =>
      Array.from(new Array(this.width), () => CELL_STATES.NONE)
    );
    DEFAULT_ALIVE_PAIRS.forEach(([x, y]) => {
      this.state[y][x] = CELL_STATES.ALIVE;
    });
    this.updated();
  }

  run(date = new Date().getTime()) {
    this.raf = requestAnimationFrame(() => {
      const currentTime = new Date().getTime();
      if (currentTime - date > RENDER_INTERVAL) {
        // creating an empty array instance that represents the next state
        let nextState = Array.from(new Array(this.height), () =>
          Array.from(new Array(this.width), () => CELL_STATES.NONE)
        );

        // cloning the current state array (doesn't work if array contains reference type)
        // we have strings so it is ok.
        // https://davidwalsh.name/javascript-clone-array
        // https://stackoverflow.com/questions/13756482/create-copy-of-multi-dimensional-array-not-reference-javascript
        // since we have a double dimension array, we clone each
        // array of the 2nd dimension
        for (let i = 0; i < this.height; i++) {
          nextState[i] = this.state[i].slice();
        }

        // foreach column
        for (let column = 0; column < this.height; column++) {
          //foreach line
          for (let line = 0; line < this.width; line++) {
            // getting the number of alive neighbours
            const nbAlive = this.aliveNeighbours(column, line);

            // if current cell has 3 neighbors and is dead,
            if (
              nbAlive === 3 &&
              this.state[line][column] !== CELL_STATES.ALIVE
            ) {
              // it becomes alive.
              nextState[line][column] = CELL_STATES.ALIVE;
            }
            // else if it has 2 or 3 neighbors but is alive,
            else if (
              (nbAlive === 2 || nbAlive === 3) &&
              this.isCellAlive(column, line)
            ) {
              // it stays alive.
              nextState[line][column] = CELL_STATES.ALIVE;
            }
            // and lastly if it has less than 2 or more than 3 (exclusive) neighbors + it is alive
            else if (
              (nbAlive < 2 || nbAlive > 3) &&
              this.isCellAlive(column, line)
            ) {
              // it dies
              nextState[line][column] = CELL_STATES.DEAD;
            }
          }
        }
        this.state = nextState;
        this.updated();
        this.run(currentTime);
      } else {
        this.run(date);
      }
    });
  }

  stop() {
    cancelAnimationFrame(this.raf);
    this.raf = null;
  }

  reset() {
    // TODO

    this.stop();
    this.init();
    this.updated();
  }

  isCellAlive(x, y) {
    return x >= 0 &&
      y >= 0 &&
      y < this.height &&
      x < this.height &&
      this.state[y][x] === CELL_STATES.ALIVE
      ? 1
      : 0;
  }
  aliveNeighbours(x, y) {
    let number = 0;
    // TODO
    // poorly maintenable method but functional

    // https://construct-static.com/images/v791/uploads/articleuploadobject/0/images/19459/2d-array.png

    /* middle : */
    //  middle-left
    number += this.isCellAlive(x - 1, y);
    //  middle-right
    number += this.isCellAlive(x + 1, y);

    /* bottom */
    number += this.isCellAlive(x - 1, y + 1);
    number += this.isCellAlive(x, y + 1);
    number += this.isCellAlive(x + 1, y + 1);

    /* top */
    number += this.isCellAlive(x - 1, y - 1);
    number += this.isCellAlive(x, y - 1);
    number += this.isCellAlive(x + 1, y - 1);

    return number;
  }

  updated() {
    // TODO update the view
    this.callback(this);
  }
}
