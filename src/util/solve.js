const findEmpty = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 0) {
        return [i, j];
      }
    }
  }
  return null;
};

const possible = (row, col, num, board) => {
  // Check row
  for (let i = 0; i < board[0].length; i++) {
    if (board[row][i] === num && col !== i) {
      return false;
    }
  };

  // Check column
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] === num && row !== i) {
      return false;
    }
  };

  // Check box
  const boxX = Math.floor(col / 3);
  const boxY = Math.floor(row / 3);

  for (let i = boxY * 3; i < boxY * 3 + 3; i++) {
    for (let j = boxX * 3; j < boxX * 3 + 3; j++) {
      if (board[i][j] === num && i !== row && j !== col) {
        return false;
      }
    }
  }

  return true;
};

const solve = (board) => {
  const find = findEmpty(board);

  if (!find) {
    return true; // no more empty spaces === puzzle solved
  } else {
    const row = find[0];
    const col = find[1];

    for (let i = 1; i <= 9; i++) { // go through each cell's possible numbers
      if (possible(row, col, i, board)) {
        board[row][col] = i;
        if (solve(board)) {
          return true;
        }
        board[row][col] = 0;
      }
    }
    return;
  }
};

// const printBoard = (board) => {
//   for (let i = 0; i < board.length; i++) {
//     if (i % 3 === 0 && i !== 0) {
//       console.log('------------------------');
//     }

//     for (let j = 0; j < board[0].length; j++) {
//       if (j % 3 === 0 && j !== 0) {
//         process.stdout.write(' | ');
//       }

//       if (j === 8) {
//         process.stdout.write(board[i][j].toString() + '\n')
//       } else {
//         process.stdout.write(board[i][j].toString() + ' ')
//       }
//     }
//   }
// }

export default solve;