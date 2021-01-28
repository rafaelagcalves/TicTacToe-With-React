import React from "react";
import PropTypes from "prop-types";

export const Square = ({ value, onSquareClick }) => {
	const style = value ? `squares ${value}` : `squares`;

	return (
		<button className={style} onClick={onSquareClick}>
			{value}
		</button>
	);
};

Square.propTypes = {
	onSquareClick: PropTypes.any,
	value: PropTypes.any,
	square: PropTypes.any
};
