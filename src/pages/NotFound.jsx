import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="noFound fade-in-top">
    Page not found. Go to
    <Link to="/">Home</Link>
    page
  </section>
);

export default NotFound;
