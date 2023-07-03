import React from 'react';
import LinkElement from '../Elements/LinkElement';
import Error from '../Pages/Error';
import { useParams } from 'react-router-dom';

function GifPage({ gifs }) {
  const { id } = useParams();
  const gif = getGifById(gifs, id);

  function getGifById(gifs, id) {
    return gifs.find(gif => gif.id === id);
  }

  return (
    <div className="gif-page">
      {gif ? (
        <>
          <h1 className="gif-page__title">{gif.title}</h1>
          <img className="gif-page__gif" src={gif.images.original.url} alt={gif.title} />
          <LinkElement path={'/search/1'} linkText="На главную" />
        </>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default GifPage;
