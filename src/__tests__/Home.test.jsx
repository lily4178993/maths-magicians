import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../pages';

test('Home component snapshot', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
