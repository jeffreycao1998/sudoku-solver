const nextMove = (allMovesRef, curMoveRef, timeout, setBoardState) => {
  setBoardState(prev => {
    if (!allMovesRef.current[curMoveRef.current]) return prev;
    const { row, col, num, advance } = allMovesRef.current[curMoveRef.current];
    const cell = document.querySelector(`.c${row}${col}`);

    // cell.style.borderWidth = '2px';
    if (advance) {
      cell.style.backgroundColor = '#2ecc71';
    } else {
      cell.style.backgroundColor = '#c0392b';
    }

    prev[row][col] = num;
    return [...prev];
  })
  curMoveRef.current += 1;
  clearTimeout(timeout);
};

export default nextMove;