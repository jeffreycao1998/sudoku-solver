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

const getSteps = (startingBoard, steps=[]) => {
  const board = [
    [...startingBoard[0]],
    [...startingBoard[1]],
    [...startingBoard[2]],
    [...startingBoard[3]],
    [...startingBoard[4]],
    [...startingBoard[5]],
    [...startingBoard[6]],
    [...startingBoard[7]],
    [...startingBoard[8]],
  ]
  const find = findEmpty(board);
  
  if (!find) {
    return steps; // no more empty spaces === puzzle solved
  } else {
    const row = find[0];
    const col = find[1];

    for (let num = 1; num <= 9; num++) { // go through each cell's possible numbers
      if (possible(row, col, num, board)) {
        board[row][col] = num;
        steps.push({ row, col, num, advance: true });
        
        if (getSteps(board, steps)) {
          return steps;
        }
        
        board[row][col] = 0;
        steps.push({ row, col, num: 0, advance: false });
      }
    }
    return; // if puzzle is unsolvable
  }
};

export default getSteps;