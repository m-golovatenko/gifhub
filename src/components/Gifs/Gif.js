function Gif({ gifUrl, title }) {
  return (
    <li className="gifs__item">
      <img className="gifs__image" src={gifUrl} alt={title} />
      <p className="gifs__title">{title}</p>
    </li>
  );
}

export default Gif;
