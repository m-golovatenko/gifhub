import React from 'react';
import Button from '../Button';
import api from '../../utils/api';
import NavBar from '../NavBar';

function RandomGif() {
  const [randomGif, setRandomGif] = React.useState([]);

  React.useEffect(() => {
    api
      .getRandomGif()
      .then(data => {
        setRandomGif(data.data.images.original);
      })
      .catch(e => console.error(`Ошибка при рендере рандомной гифки. Код ошибки: ${e}`));
  }, [setRandomGif]);

  return (
    <>
      <NavBar />
      <div className="random-gif">
        <img src={randomGif.url} alt={randomGif.title} className="random-gif__gif" />
        <Button buttonText={'Следующая'} />
      </div>
    </>
  );
}

export default RandomGif;
