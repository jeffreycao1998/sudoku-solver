import React from 'react';
import styled from 'styled-components';

const StyledBoard = styled.div`

  .row {
    display: flex;

    .cell {
      width: 40px;
      height: 40px;
      font-size: 30px;
      border: 1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Board = ({ boardState }) => {

  const cells = boardState.map((row, rowIndex) => {
    return <div className='row' key={`row${rowIndex}`}>
      {
        row.map((cell, cellIndex) => {
          return <div className='cell' key={`row${rowIndex}cell${cellIndex}`}>
            {
              cell === 0 ? ' ' : cell
            }
          </div>
        })
      }
    </div>
  });

  return(
    <StyledBoard>{ cells }</StyledBoard>
  );
};

export default Board;