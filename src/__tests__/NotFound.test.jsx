import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NotFound } from '../pages';

test('NotFound component snapshot', () => {
  const { asFragment } = render(
    <Router>
      <NotFound />
    </Router>,
  );
  expect(asFragment()).toMatchSnapshot();
});
