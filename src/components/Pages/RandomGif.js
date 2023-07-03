import React from 'react';
import Button from '../Button';
import api from '../../utils/api';
import NavBar from '../NavBar';
import Loader from '../Loader';

function RandomGif({ setIsLoading, isLoading }) {
  const [randomGif, setRandomGif] = React.useState([]);
  const [textValue, setTextValue] = React.useState('Испытать удачу');

  const randomText = [
    { text: 'Поехали 🚘', key: 1 },
    { text: 'Акцио gif ✨', key: 2 },
    { text: 'Get Lucky 🍀', key: 3 },
    { text: 'Мне повезет 🙌', key: 4 },
    { text: 'Готов удивляться💥', key: 5 },
    { text: 'Хочу gif 🤝', key: 6 },
    { text: 'Get Giphy 🤖', key: 7 },
    { text: 'img.gif 👾', key: 8 },
    { text: 'GIFt card 🎁', key: 9 }
  ];

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
    const length = randomText.length;
    setTextValue(randomText[Math.floor(Math.random() * length)].text);
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
        <Button buttonText={textValue} handleClick={handleClick} />
      </div>
    </>
  );
}

export default RandomGif;
