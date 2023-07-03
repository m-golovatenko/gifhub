import Pagination from '../Pagination';
import Gif from './Gif';

function Gifs({ gifs, pagination, type }) {
  return (
    <>
      <ul className="gifs">
        {gifs.map(gif => (
          <Gif key={gif.id} gifUrl={gif.images.original.url} title={gif.title} />
        ))}
      </ul>

      <Pagination pagination={pagination} type={type} />
    </>
  );
}

export default Gifs;
