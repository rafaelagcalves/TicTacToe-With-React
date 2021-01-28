import React from "react";
import { Square } from "./square.js";
import PropTypes from "prop-types";

export const Board = ({ squares, onUserClick }) => {
	return (
		<div className="board">
			{squares.map((square, i) => (
				<Square
					key={i}
					value={square}
					onSquareClick={() => onUserClick(i)}
				/>
			))}
		</div>
	);
};

Board.propTypes = {
	onUserClick: PropTypes.any,
	squares: PropTypes.any,
	square: PropTypes.any
};
