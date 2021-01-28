import React from "react";
import PropTypes from 'prop-types';

export const Square = ({value, onClick}) => {
    const style = value ? `squares ${value}` : `squares`;
    
    return (
        <button className={style} onClick={onClick}>
            {value}
        </button>
    )
}

Square.propTypes = {
  onClick: PropTypes.string
};