import React from 'react';
import styled from 'styled-components';

const StyledBoard = styled.div`
  max-width: ${window.innerWidth > window.innerHeight ? window.innerHeight - 20 : window.innerWidth - 20}px;
  max-height: ${window.innerWidth > window.innerHeight ? window.innerHeight - 20 : window.innerWidth - 20}px;
  width: 500px;
  height: 500px;

  .row {
    display: flex;
    width: 100%;
    height: calc(100% / 9);

    &:nth-child(3n):not(:last-child) {
      .cell {
        border-bottom: 3px solid black;
      }
    }

    &:first-child {
      .cell {
        border-top: 3px solid black;
      }
    }

    &:last-child {
      .cell {
        border-bottom: 3px solid black;
      }
    }

    .cell {
      width: calc(100% / 9);
      height: 100%;
      font-size: 25px;
      border: 1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;

      &:nth-child(3n):not(:last-child) {
        border-right: 3px solid black;
      }

      &:first-child {
        border-left: 3px solid black;
      }

      &:last-child {
        border-right: 3px solid black;
      }
    }
  }
`;

const Board = ({ boardState }) => {
  const cells = boardState.map((row, rowIndex) => {
    return <div className='row' key={`row${rowIndex}`}>
      {
        row.map((cell, colIndex) => {
          return <div className={`cell c${rowIndex}${colIndex}`} key={`row${rowIndex}col${colIndex}`}>
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