import React from "react";
import Square from "./square";
import PropTypes from "prop-types";

export const Board = ({ squares, onClick }) => {
	return (
		<div className="board">
			{squares.map((square, i) => (
				<Square key={i} value={square} onClick={() => onClick(i)} />
			))}
		</div>
	);
};

Board.propTypes = {
	onClick: PropTypes.string,
	squares: PropTypes.string
};
