import Pagination from '../Elements/Pagination';
import Gif from './Gif';

function Gifs({ gifs, pagination, type }) {
  return (
    <>
      <ul className="gifs">
        {gifs.map(gif => (
          <Gif
            id={gif.id}
            key={gif.id}
            gifUrl={gif.images.original.url}
            title={gif.title}
            type={type}
          />
        ))}
      </ul>

      <Pagination pagination={pagination} type={type} />
    </>
  );
}

export default Gifs;
