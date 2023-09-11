import React, { useState } from 'react';
import calculate from '../logic/calculate';
import CalcKeyboard from './CalcKeyboard';
import { keys } from './data';
import CalcOutput from './CalcOutput';

const Calculator = () => {
  const initialState = {
    operation: null,
    next: null,
    total: null,
  };

  const [resultOperation, setResultOperation] = useState(initialState);

  const makeOperation = (buttonContent) => {
    setResultOperation((previousOperation) => {
      const result = calculate(previousOperation, buttonContent);
      return result;
    });
  };

  const shouldRenderOutput1 = resultOperation.total !== null && resultOperation.total !== undefined;

  return (
    <div className="calculator">
      <div className="output">
        {shouldRenderOutput1 && (
          <CalcOutput
            outputValue={resultOperation.total || '0'}
            className="output1"
          />
        )}
        <CalcOutput
          outputValue={resultOperation.next || resultOperation.operation || '0'}
          className="output2"
        />
      </div>
      <CalcKeyboard
        buttonProps={keys}
        buttonEvent={makeOperation}
      />
    </div>
  );
};

export default Calculator;
