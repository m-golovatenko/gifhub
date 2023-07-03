import React from 'react';
import LinkElement from '../LinkElement';
import Error from '../Error';
import { useParams } from 'react-router-dom';

function GifPage({ gifs }) {
  function getGifById(gifs, id) {
    gifs.find(gif => gif.id === id);
  }

  const { id } = useParams();

  const gif = getGifById(gifs, id);

  return (
    <div className="gif__page">
      {gif ? (
        <>
          <h2 className="gif__title">{gif.title}</h2>
          <img className="gif__gif" src={gif.src} alt={gif.title} />
          <LinkElement path={'/search'} linkText="На главную" />
        </>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default GifPage;
