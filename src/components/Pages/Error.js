import React from 'react';
import LinkElement from '../Elements/LinkElement';

function Error() {
  return (
    <>
      <div className="error">
        <p className="error__code">404</p>
        <p className="error__text">
          Ой... Здесь ничего нет. Зато на главной странице можно найти любую гифку
        </p>
      </div>
      <LinkElement path={'/search/1'} linkText={'На главную'} />
    </>
  );
}

export default Error;
