import React, { useState, Fragment } from "react";
import { calculateWinner } from "./helper.js";
import { Board } from "./board.js";

export const Home = () => {
	// Create an array with 9 positions == null
	const [history, setHistory] = useState([Array(9).fill(null)]);
	// Steps until this point
	const [stepNumber, setStepNumber] = useState(0);
	// When it's TRUE it's X's turn and when it's FALSE it's O's turn
	const [xIsNext, setXIsNext] = useState(true);
	// Winner algorithm
	const winner = calculateWinner(history[stepNumber]);
	// String inside the squares
	const xO = xIsNext ? "X" : "O";

	// Function for every click
	const handleClick = i => {
		// Add new array for history
		const historyPoint = history.slice(0, stepNumber + 1);
		// Store the array
		const current = historyPoint[stepNumber];
		// Spread Operator
		const squares = [...current];
		// Return if won or occupied
		if (winner || squares[i]) return;
		// Select square
		squares[i] = xO;
		setHistory([...historyPoint, squares]);
		setStepNumber(historyPoint.length);
		setXIsNext(!xIsNext);
	};

	// Go back to the step you want
	const jumpTo = step => {
		// Store turns
		setStepNumber(step);
		setXIsNext(step % 2 === 0);
	};

	// Create step buttons
	const renderMoves = () =>
		history.map((_step, move) => {
			const destination = move ? `Go to move#${move}` : "Go to start";
			return (
				<li key={move}>
					<button onClick={() => jumpTo(move)}>{destination}</button>
				</li>
			);
		});

	return (
		<Fragment>
			<h1>Tic Tac Toe With React</h1>
			<Board squares={history[stepNumber]} onUserClick={handleClick} />
			<div className="info-wrapper">
				<div>
					<h3>History</h3>
					{renderMoves()}
				</div>
				<h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
			</div>
		</Fragment>
	);
};
