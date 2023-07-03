import React from 'react';
import LinkElement from '../Elements/LinkElement';
import Error from '../Pages/Error';
import { useParams } from 'react-router-dom';
import api from '../../utils/api';

function GifPage({ gifs }) {
  const { id } = useParams();
  const [gif, setGif] = React.useState(null);

  React.useEffect(() => {
    const foundGif = gifs.find(gif => gif.id === id); //берем gif либо из кеша либо запросом
    if (!foundGif) {
      api
        .getGifById(id)
        .then(data => {
          console.log('data.data', data.data);
          setGif(data.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
    setGif(foundGif);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="gif-page">
      {gif ? (
        <>
          <h2 className="gif-page__title">{gif.title}</h2>
          <img className="gif-page__gif" src={gif.images.original.url} alt={gif.title} />
          <LinkElement path={-1} linkText="Назад" />
        </>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default GifPage;
