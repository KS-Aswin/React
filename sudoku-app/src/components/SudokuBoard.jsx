import React, { useState } from "react";
import sudoku from "sudoku";
import "../App.css";

function SudokuBoard() {
  const [board, setBoard] = useState(sudoku.makepuzzle());
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState('');

  function handleChange(e, index) {
    const value = e.target.value;
    if (value === "" || /^[1-9]$/.test(value)) {
      const newBoard = [...board];
      newBoard[index] = value === "" ? null : parseInt(value, 10) - 1;
      setBoard(newBoard);
    }
  }

  function renderBoard() {
    return board.map((cell, index) => (
      <input
        key={index}
        type="text"
        value={cell === null ? "" : cell + 1}
        onChange={(e) => handleChange(e, index)}
        className="sudoku-cell"
      />
    ));
  }

  function resetBoard() {
    const newBoard = sudoku.makepuzzle();
    setBoard(newBoard);
    setMessage('');
    setMessageType('');
  }

  function validateBoard() {
    if (!isBoardComplete(board)) {
      setMessage('Not all cells are filled.');
      setMessageType('incomplete');
    } else {
      const isValid = validateSudoku(board);
      setMessage(isValid ? 'Sudoku is correct!' : 'Sudoku is incorrect.');
      setMessageType(isValid ? 'correct' : 'incorrect');
    }
  }

  function isBoardComplete(board) {
    return board.every(cell => cell !== null);
  }

  function validateSudoku(board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let i = 0; i < 81; i++) {
      const value = board[i];
      if (value === null) {
        continue;
      } else {
        const row = Math.floor(i / 9);
        const col = i % 9;
        const box = Math.floor(row / 3) * 3 + Math.floor(col / 3);

        if (
          rows[row].has(value) ||
          cols[col].has(value) ||
          boxes[box].has(value)
        ) {
          return false;
        }

        rows[row].add(value);
        cols[col].add(value);
        boxes[box].add(value);
      }
    }

    return true;
  }

  return (
    <>
      <div>
        <h1>Sudoku</h1>
        <div className="sudoku-board">{renderBoard()}</div>
        <button onClick={resetBoard} className="reset-button">
          Reset
        </button>
        <button onClick={validateBoard} className="validate-button">
          Check
        </button>
        <div className="message">{message}</div>
      </div>
    </>
  );
}

export default SudokuBoard;
