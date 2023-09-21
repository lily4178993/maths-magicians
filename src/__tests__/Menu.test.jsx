import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from '../components/Menu';

describe('Menu Component', () => {
  it('matches snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <Menu />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Home link', () => {
    render(
      <Router>
        <Menu />
      </Router>,
    );

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('renders Calculator link', () => {
    render(
      <Router>
        <Menu />
      </Router>,
    );

    const calculatorLink = screen.getByText('Calculator');
    expect(calculatorLink).toBeInTheDocument();
    expect(calculatorLink).toHaveAttribute('href', '/calculator');
  });

  it('renders Quote link', () => {
    render(
      <Router>
        <Menu />
      </Router>,
    );

    const quoteLink = screen.getByText('Quote');
    expect(quoteLink).toBeInTheDocument();
    expect(quoteLink).toHaveAttribute('href', '/quote');
  });
});
