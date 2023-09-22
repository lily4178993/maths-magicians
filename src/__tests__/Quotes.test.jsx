import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quotes from '../components/Quotes';

// Mock environment variables
beforeEach(() => {
  process.env.REACT_APP_QUOTES_URL = 'mocked-url';
  process.env.REACT_APP_QUOTES_API_KEY = 'mocked-api-key';
  process.env.REACT_APP_QUOTES_CATEGORY = 'mocked-category';
});

afterEach(() => {
  delete process.env.REACT_APP_QUOTES_URL;
  delete process.env.REACT_APP_QUOTES_API_KEY;
  delete process.env.REACT_APP_QUOTES_CATEGORY;
});

// Mock fetch function
const mockFetch = (data, status = 200) => jest.fn().mockResolvedValue({
  ok: status < 400,
  status,
  json: () => Promise.resolve(data),
});

describe('Quotes component', () => {
  it('matches snapshot while fetching quotes', async () => {
    global.fetch = mockFetch([]);
    const { asFragment } = render(<Quotes />);

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('matches snapshot when fetching quotes is successful', async () => {
    const quotes = [
      { quote: 'Quote 1', author: 'Author 1' },
      { quote: 'Quote 2', author: 'Author 2' },
    ];

    global.fetch = mockFetch(quotes);
    const { asFragment } = render(<Quotes />);

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
