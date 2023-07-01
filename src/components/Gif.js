function Gif({ gifUrl, title }) {
  return (
    <figure className="gifs__item">
      <img className="gifs__image" src={gifUrl} alt={title} />
      <figcaption className="gifs__title">{title}</figcaption>
    </figure>
  )
}

export default Gif;