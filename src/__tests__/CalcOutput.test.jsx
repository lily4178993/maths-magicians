import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CalcOutput from '../components/CalcOutput';

test('PropTypes snapshot', () => {
  const { asFragment } = render(<CalcOutput outputValue="123" className="output" />);
  expect(asFragment()).toMatchSnapshot();
});

test('Simulate user interaction', () => {
  const { getByText } = render(<CalcOutput outputValue="123" className="output" />);
  const outputElement = getByText('123');
  expect(outputElement).toBeInTheDocument();
});
