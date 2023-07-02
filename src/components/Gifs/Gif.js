import React from 'react';
import { Link } from 'react-router-dom';

function Gif({ gifUrl, title, id }) {
  return (
    <li>
      <Link to={'/:id'} className="gifs__item">
        <img className="gifs__image" src={gifUrl} alt={title} />
        <p className="gifs__title">{title}</p>
      </Link>
    </li>
  );
}

export default Gif;
