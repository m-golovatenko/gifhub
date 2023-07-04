import React from 'react';
import { Link } from 'react-router-dom';

function Gif({ gifUrl, title, type, id }) {
  return (
    <li>
      <Link to={`/${type}/gifs/${id}`} className="gifs__item">
        <img className="gifs__image" src={gifUrl} alt={title} />
        <div className="gifs__title">
          <p className="gifs__title-text">{title}</p>
        </div>
      </Link>
    </li>
  );
}

export default Gif;
