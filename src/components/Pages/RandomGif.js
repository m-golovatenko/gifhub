import React from 'react';
import Button from '../Button';
import api from '../../utils/api';
import NavBar from '../NavBar';
import Loader from '../Loader';

function RandomGif({ setIsLoading, isLoading }) {
  const [randomGif, setRandomGif] = React.useState([]);

  function getRandomGif() {
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
  }

  const handleClick = () => {
    getRandomGif();
  };

  React.useEffect(() => {
    getRandomGif();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <NavBar />
      <div className="random-gif">
        {isLoading ? (
          <Loader />
        ) : (
          <img src={randomGif.url} alt={randomGif.title} className="random-gif__gif" />
        )}
        <Button buttonText={'Попытать удачу'} handleClick={handleClick} />
      </div>
    </>
  );
}

export default RandomGif;
