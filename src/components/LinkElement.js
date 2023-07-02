import React from 'react';
import { Link } from 'react-router-dom';

function LinkElement({ path, linkText }) {
  return (
    <Link to={path} className="link">
      {linkText}
    </Link>
  );
}

export default LinkElement;
