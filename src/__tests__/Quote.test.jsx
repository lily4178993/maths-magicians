import React from 'react';
import { render } from '@testing-library/react';
import { Quote } from '../pages';

test('Quote component snapshot', () => {
  const { asFragment } = render(<Quote />);
  expect(asFragment()).toMatchSnapshot();
});
