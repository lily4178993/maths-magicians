import React from 'react';
import PropTypes from 'prop-types';

const CalcOutput = ({ outputValue }) => (
  <div className="output">
    <div>{outputValue}</div>
  </div>
);

CalcOutput.propTypes = {
  outputValue: PropTypes.string.isRequired,
};

export default CalcOutput;
