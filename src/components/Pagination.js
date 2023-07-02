import { useParams, Link  } from 'react-router-dom';

function Pagination({ pagination }) {
  let { page } = useParams();
  const totalCountPage = Math.floor(pagination.total_count/pagination.count);
  
  function getPaginationList() {
    const paginationList = [];

    if (page < 4) {
      for(let i = 1; i < 6; i++) {
        paginationList.push(i);
        if(i === totalCountPage) {
          break;
        }
      }
    } else if(page > 3 && totalCountPage-page > 2) {
      for (let i = -2; i < 3; i++) {
        paginationList.push(+page+i);
      }
    } else if(totalCountPage-page < 3 && totalCountPage-page >= 0) {
      for (let i = totalCountPage-4; i <= totalCountPage; i++) {
        paginationList.push(i);
      }
    }
    return paginationList;
  }

  return (
    <div className="pages">
      <ul className="pages__list">
        {(page > 3) && <Link to="/trending/1" className="pages__button">В начало</Link>}

        {getPaginationList().map((page, i) => {
          return (
            <li key={i} className="pages__item">
              <Link to={`/trending/${page}`}>{page}</Link>
            </li>
          )
        })}

        {(totalCountPage-page > 3) && <Link to={`/trending/${+page+1}`} className="pages__button">Вперед</Link>}

      </ul>
    </div>
  );
}

export default Pagination;
