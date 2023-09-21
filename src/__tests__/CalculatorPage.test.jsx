import React from 'react';
import { render } from '@testing-library/react';
import { CalculatorPage } from '../pages';

test('CalculatorPage component snapshot', () => {
  const { asFragment } = render(<CalculatorPage />);
  expect(asFragment()).toMatchSnapshot();
});
