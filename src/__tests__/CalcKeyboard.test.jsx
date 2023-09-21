import React from 'react';
import { render } from '@testing-library/react';
import CalcKeyboard from '../components/CalcKeyboard';

test('PropTypes snapshot', () => {
  const buttonProps = [
    { id: 3, symbol: '1' },
    { id: 3, symbol: '2' },
    { id: 1, symbol: '+' },
    { id: 2, symbol: '-' },
  ];
  const buttonEvent = jest.fn();

  const { asFragment } = render(
    <CalcKeyboard buttonProps={buttonProps} buttonEvent={buttonEvent} />,
  );
  expect(asFragment()).toMatchSnapshot();
});
