import React from 'react';
import CalcKeyboard from './CalcKeyboard';
import { keys } from './data';
import CalcOutput from './CalcOutput';

const Calculator = () => {
  const value = '0';
  return (
    // eslint-disable-next-line jsx-quotes
    <div className='calculator'>
      <CalcOutput outputValue={value} />
      <CalcKeyboard buttonProps={keys} />
    </div>
  );
};

export default Calculator;
