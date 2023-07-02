import Pagination from './Pagination';
import Gif from './Gif';

function Gifs({ gifs, pagination }) {
  return (
    <>
      <div className="gifs">
        {gifs.map(gif => (
          <Gif key={gif.id} gifUrl={gif.images.original.url} title={gif.title} />
        ))}
      </div>

      <Pagination pagination={pagination} />
    </>
  );
}

export default Gifs;