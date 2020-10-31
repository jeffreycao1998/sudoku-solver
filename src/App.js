import React, { useEffect, useState, useRef, useMemo } from 'react';
import styled from 'styled-components';
import getSteps from './util/getSteps';
import nextMove from './util/nextMove';

import Board from './components/Board';

const board = [
  [7, 8, 0, 4, 0, 0, 1, 2, 0],
  [6, 0, 0, 0, 7, 5, 0, 0, 9],
  [0, 0, 0, 6, 0, 1, 0, 7, 8],
  [0, 0, 7, 0, 4, 0, 2, 6, 0],
  [0, 0, 1, 0, 5, 0, 9, 3, 0],
  [9, 0, 4, 0, 6, 0, 0, 0, 5],
  [0, 7, 0, 3, 0, 0, 0, 1, 2],
  [1, 2, 0, 0, 0, 7, 4, 0, 0],
  [0, 4, 9, 2, 0, 6, 0, 0, 7]
];

const board2 = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .controls {
    display: flex;
    justify-content: center;
    margin-top: 6px;
    max-width: ${window.innerWidth > window.innerHeight ? window.innerHeight - 20 : window.innerWidth - 20}px;
    width: 500px;
    position: relative;

    .moves {
      width: 55px;
      line-height: 40px;
      opacity: ${props => props.solvePuzzleRef ? 1 : 0};
    }

    .btn-solve {
      background-color: #9b59b6;
      border: none;
      border-bottom: 3px solid #8e44ad;
      padding: 10px 40px;
      border-radius: 5px;
      color: white;
      font-weight: 600;
      transition: all 0.1s;
      position: absolute;
      right: 0;

      &:active {
        transform: translateY(3px);
      }

      &:focus {
        outline: none;
      }
    }
  }
`;

const steps = getSteps(board2);

function App() {
  const [ boardState, setBoardState ] = useState(board2);

  const allMovesRef = useRef(steps);
  const curMoveRef = useRef(0);

  const solvePuzzleRef = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (solvePuzzleRef.current) {
      timeoutRef.current = setTimeout(() => {
        nextMove(allMovesRef, curMoveRef, timeoutRef.current, setBoardState);
      }, 20);
    }
  },[boardState]);

  const startSolving = () => {
    solvePuzzleRef.current = true;
    timeoutRef.current = setTimeout(() => {
      nextMove(allMovesRef, curMoveRef, timeoutRef.current, setBoardState);
    }, 100);
  };

  return (
    <StyledApp
      solvePuzzleRef={solvePuzzleRef.current}
    >
      <Board 
        boardState={boardState}
      />
      <div className='controls'>
        <div className='moves'>{`${curMoveRef.current + 1}/${allMovesRef.current.length}`}</div>
        <button className='btn-solve' onClick={startSolving}>
          Solve
        </button>
      </div>
    </StyledApp>
  );
}

export default App;
