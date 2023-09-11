import React from 'react';
import PropTypes from 'prop-types';
import CalcButton from './CalcButton';

const CalcKeyboard = ({ buttonProps, buttonEvent }) => (
  <div className="keyboard">
    {buttonProps.map((buttonProp) => (
      <CalcButton
        key={buttonProp.id}
        symbol={buttonProp.symbol}
        buttonEvent={buttonEvent}
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
  buttonEvent: PropTypes.func.isRequired,
};

export default CalcKeyboard;
