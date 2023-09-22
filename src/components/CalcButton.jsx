import React from 'react';
import PropTypes from 'prop-types';
import { highlightedKeys } from './data';

const CalcButton = ({ symbol, buttonEvent }) => {
  const isButtonOrange = highlightedKeys.includes(symbol);

  const handleClick = (e) => {
    buttonEvent(e.target.textContent);
  };

  return (
    <button
      type="button"
      title={symbol}
      onClick={handleClick}
      className={isButtonOrange ? 'orange' : null}
    >
      {symbol}
    </button>
  );
};

CalcButton.propTypes = {
  symbol: PropTypes.string.isRequired,
  buttonEvent: PropTypes.func.isRequired,
};
export default CalcButton;
