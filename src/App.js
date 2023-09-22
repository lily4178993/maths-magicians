import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
  CalculatorPage, Home, NotFound, Quote,
} from './pages';
import { Menu } from './components';

const App = () => (
  <>
    <header>
      <span className="logo">Math Magicians</span>
      <Menu />
    </header>
    <main>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/calculator"
          element={<CalculatorPage />}
        />
        <Route
          path="/quote"
          element={<Quote />}
        />
        <Route
          path="/*"
          element={<NotFound />}
        />
      </Routes>
    </main>
    <footer>
      &copy; 2023
      {' - '}
      <Link to="/">Math Magicians</Link>
      {' - '}
      <Link
        to="https://github.com/lily4178993/maths-magicians#license"
        target="_blank"
      >
        All rights reserved
      </Link>
    </footer>
  </>
);

export default App;
