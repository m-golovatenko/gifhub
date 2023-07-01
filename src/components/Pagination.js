function Pagination() {
  return (
    <div className="pages">
      <button className="pages__button">Назад</button>
      <ul className="pages__list">
        <li className="pages__item">
          <a href="/gifs/:1">1</a>
        </li>
        <li className="pages__item">
          <a href="/gifs/:2">2</a>
        </li>
        <li className="pages__item">
          <a href="/gifs/:3">3</a>
        </li>
        <li className="pages__item">
          <a href="/gifs/:4">4</a>
        </li>
        <li className="pages__item">
          <a href="/gifs/:5">5</a>
        </li>
        <li className="pages__item">
          <a href="/gifs/:6">6</a>
        </li>
        <li className="pages__item">
          <a href="/gifs/:7">7</a>
        </li>
        <li className="pages__item">
          <a href="/gifs/:8">8</a>
        </li>
        <li>
          <p className="pages__item-text">...</p>
        </li>
        <li className="pages__item">
          <a href="/gifs/:15">15</a>
        </li>
      </ul>

      <button className="pages__button">Вперед</button>
    </div>
  );
}

export default Pagination;
