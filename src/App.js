import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getSteps from './util/solve';

import Board from './components/Board';

const board = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,5,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]
];

const initialBoard = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,5,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]
];

function App() {
  const [ boardState, setBoardState ] = useState(initialBoard);
  const [ allMoves, setAllMoves ] = useState(getSteps(board));
  const [ curMove, setCurMove ] = useState(0);

  // while (curMove < allMoves.length) {
  //   setBoardState()
  // }

  return (
    <div>
      <Board boardState={boardState}/>
    </div>
  );
}

export default App;
