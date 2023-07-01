function Pagination() {
  return (
    <div className="pages">
      <button className="pages__button">Назад</button>
      <ul className="pages__list">
        <li className="pages__item">
          <a>1</a>
        </li>
        <li className="pages__item">
          <a>2</a>
        </li>
        <li className="pages__item">
          <a>3</a>
        </li>
        <li className="pages__item">
          <a>4</a>
        </li>
        <li className="pages__item">
          <a>5</a>
        </li>
        <li className="pages__item">
          <a>6</a>
        </li>
        <li className="pages__item">
          <a>7</a>
        </li>
        <li className="pages__item">
          <a>8</a>
        </li>
        <li>
          <p className="pages__item-text">...</p>
        </li>
        <li className="pages__item">
          <a>15</a>
        </li>
      </ul>

      <button className="pages__button">Вперед</button>
    </div>
  );
}

export default Pagination;
