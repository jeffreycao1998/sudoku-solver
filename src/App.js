import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import getSteps from './util/solve';

import Board from './components/Board';

const board = [
  [7, 8, ' ', 4, ' ', ' ', 1, 2, 0],
  [6, ' ', ' ', ' ', 7, 5, ' ', ' ', 9],
  [' ', ' ', ' ', 6, ' ', 1, ' ', 7, 8],
  [' ', ' ', 7, ' ', 4, ' ', 2, 6, 0],
  [' ', ' ', 1, ' ', 5, ' ', 9, 3, 0],
  [9, ' ', 4, ' ', 6, ' ', ' ', ' ', 5],
  [' ', 7, ' ', 3, ' ', ' ', ' ', 1, 2],
  [1, 2, ' ', ' ', ' ', 7, 4, ' ', 0],
  [' ', 4, 9, 2, ' ', 6, ' ', ' ', 7]
]

const initialBoard = [
  [7, 8, ' ', 4, ' ', ' ', 1, 2, 0],
  [6, ' ', ' ', ' ', 7, 5, ' ', ' ', 9],
  [' ', ' ', ' ', 6, ' ', 1, ' ', 7, 8],
  [' ', ' ', 7, ' ', 4, ' ', 2, 6, 0],
  [' ', ' ', 1, ' ', 5, ' ', 9, 3, 0],
  [9, ' ', 4, ' ', 6, ' ', ' ', ' ', 5],
  [' ', 7, ' ', 3, ' ', ' ', ' ', 1, 2],
  [1, 2, ' ', ' ', ' ', 7, 4, ' ', 0],
  [' ', 4, 9, 2, ' ', 6, ' ', ' ', 7]
]

const steps = getSteps(board);

function App() {
  const [ boardState, setBoardState ] = useState(initialBoard);
  const curMoveRef = useRef(0);
  const allMovesRef = useRef(steps);
  let timeout;

  const nextMove = (allMovesRef, curMoveRef) => {
    console.log('ran');
    setBoardState(prev => {
      if (!allMovesRef.current[curMoveRef.current]) return prev;

      const { row, col, num } = allMovesRef.current[curMoveRef.current];

      prev[row][col] = num;
      return [...prev];
    })
    curMoveRef.current += 1;
    clearTimeout(timeout);
  };

  useEffect(() => {
    timeout = setTimeout(() => {
      nextMove(allMovesRef, curMoveRef);
    }, 200);
  },[boardState]);

  return (
    <div>
      <Board 
        boardState={boardState}
      />
    </div>
  );
}

export default App;
