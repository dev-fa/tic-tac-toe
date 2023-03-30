import bus from './bus';

class TicTacToe {
  constructor() {
    bus.on('play', (cords) => {
      this.play(cords[0], cords[1]);
    });

    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.currentPlayer = 'X';
    this.winner = null;
    this.gameOver = false;
    this.turnsPlayed = 0;
  }

  reset() {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.currentPlayer = 'X';
    this.winner = null;
    this.gameOver = false;
    this.turnsPlayed = 0;
  }

  play(row, col) {
    if (this.board[row][col] !== null || this.gameOver) {
      return false;
    }

    this.board[row][col] = this.currentPlayer;
    this.turnsPlayed += 1;

    if (this.checkForWinner()) {
      this.winner = this.currentPlayer;
      this.gameOver = true;
      bus.emit('gameOver', this.winner);
    } else if (this.turnsPlayed === 9) {
      this.winner = 'tie';
      this.gameOver = true;
      bus.emit('gameOver', this.winner);
    } else {
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }

    return true;
  }

  checkForWinner() {
    const rows = this.board;
    const cols = [[], [], []];
    const diagonals = [[], []];

    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        cols[j].push(this.board[i][j]);
      }
      diagonals[0].push(this.board[i][i]);
      diagonals[1].push(this.board[i][2 - i]);
    }

    const linesToCheck = [...rows, ...cols, ...diagonals];

    for (let i = 0; i < linesToCheck.length; i += 1) {
      const line = linesToCheck[i];

      if (line.every((cell) => cell === 'X')) {
        return true;
      }

      if (line.every((cell) => cell === 'O')) {
        return true;
      }
    }

    return false;
  }
}

export default new TicTacToe();
