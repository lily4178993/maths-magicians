import React from 'react';
import PropTypes from 'prop-types';

const CalcOutput = ({ outputValue, className }) => (
  <div className={className}>{outputValue}</div>
);

CalcOutput.propTypes = {
  outputValue: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default CalcOutput;
