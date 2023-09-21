import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CalcButton from '../components/CalcButton';

test('PropTypes snapshot', () => {
  const buttonEvent = jest.fn();
  const { asFragment } = render(<CalcButton symbol="+" buttonEvent={buttonEvent} />);
  expect(asFragment()).toMatchSnapshot();
});

test('Simulate user interaction', () => {
  const buttonEvent = jest.fn();
  const { getByText } = render(<CalcButton symbol="+" buttonEvent={buttonEvent} />);
  const buttonElement = getByText('+');

  fireEvent.click(buttonElement);

  expect(buttonEvent).toHaveBeenCalledWith('+');
});
