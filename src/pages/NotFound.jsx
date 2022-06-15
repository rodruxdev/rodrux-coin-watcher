import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/pages/NotFound.css';

function NotFound() {
  return (
    <main className="not-found">
      <h1 className="not-found__error">Error 404</h1>
      <h2 className="not-found__title">Page not found</h2>
      <p className="not-found__text">
        Return to{' '}
        <Link to="/" className="not-found__link">
          Home Page
        </Link>
      </p>
    </main>
  );
}

export default NotFound;
