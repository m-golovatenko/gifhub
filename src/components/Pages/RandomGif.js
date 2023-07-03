import React from 'react';
import Button from '../Button';
import api from '../../utils/api';
import NavBar from '../NavBar';
import Loader from '../Loader';

function RandomGif({ setIsLoading, isLoading }) {
  const [randomGif, setRandomGif] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);

    api
      .getRandomGif()
      .then(data => {
        setRandomGif(data.data.images.original);
        setIsLoading(false);
      })

      .catch(e => console.error(`Ошибка при рендере рандомной гифки. Код ошибки: ${e}`))
      .finally(() => {
        setIsLoading(false);
      });
  }, [setRandomGif, setIsLoading]);

  return (
    <>
      <NavBar />
      <div className="random-gif">
        {isLoading ? (
          <Loader />
        ) : (
          <img src={randomGif.url} alt={randomGif.title} className="random-gif__gif" />
        )}
        <Button buttonText={'Следующая'} />
      </div>
    </>
  );
}

export default RandomGif;
