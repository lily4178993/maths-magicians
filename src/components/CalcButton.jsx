import React from 'react';
import PropTypes from 'prop-types';
import { highlightedKeys } from './data';

const CalcButton = ({ symbol }) => {
  const isButtonOrange = highlightedKeys.includes(symbol);

  return (
    <button
      type="button"
      title={symbol}
      className={isButtonOrange ? 'orange' : null}
    >
      {symbol}
    </button>
  );
};

CalcButton.propTypes = {
  symbol: PropTypes.string.isRequired,
};
export default CalcButton;
