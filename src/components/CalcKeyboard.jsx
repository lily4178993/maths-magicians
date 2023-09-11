import React from 'react';
import PropTypes from 'prop-types';
import CalcButton from './CalcButton';

const CalcKeyboard = ({ buttonProps }) => (
  <div className="keyboard">
    {buttonProps.map((buttonProp) => (
      <CalcButton
        key={buttonProp.id}
        symbol={buttonProp.symbol}
      />
    ))}
  </div>
);

CalcKeyboard.propTypes = {
  buttonProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      symbol: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CalcKeyboard;
