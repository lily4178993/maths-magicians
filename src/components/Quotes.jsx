import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const baseURL = process.env.REACT_APP_QUOTES_URL;
  const apiKey = process.env.REACT_APP_QUOTES_KEY;
  const category = process.env.REACT_APP_QUOTES_CATEGORY;

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(baseURL + category, {
          headers: {
            'X-Api-Key': apiKey,
          },
          contentType: 'application/json',
          'X-Content-Type-Options': 'nosniff',
        });

        if (!response.ok) {
          throw new Error(
            `Failed to fetch quotes - Status: ${response.status}`,
          );
        }

        const data = await response.json();
        setQuotes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (quotes.length === 0) {
      fetchQuotes();
    }
  }, [apiKey, baseURL, category, quotes.length]);

  return (
    <>
      {loading && <div className="loading-message">Loading...</div>}
      {error && <div className="error-message">{error}</div>}
      {quotes.map((item) => (
        <p key={1} className="quote">
          <i>
            <b>
              <cite>{item.quote}</cite>
              <br />
              <br />
              {item.author}
            </b>
          </i>
        </p>
      ))}
    </>
  );
};

export default Quotes;
