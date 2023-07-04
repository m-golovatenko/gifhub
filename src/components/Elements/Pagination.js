import { useParams, Link, NavLink } from 'react-router-dom';

function Pagination({ pagination, type }) {
  let { page } = useParams();
  let { query } = useParams();

  const totalCountPage = Math.floor(pagination.total_count / pagination.count);

  function getPaginationList() {
    const paginationList = [];

    if (page < 4) {
      for (let i = 1; i < 6; i++) {
        paginationList.push(i);
        if (i === totalCountPage) {
          break;
        }
      }
    } else if (page > 3 && totalCountPage - page > 2) {
      for (let i = -2; i < 3; i++) {
        paginationList.push(+page + i);
      }
    } else if (totalCountPage - page < 3 && totalCountPage - page >= 0) {
      for (let i = totalCountPage - 4; i <= totalCountPage; i++) {
        paginationList.push(i);
      }
    }
    return paginationList;
  }

  return (
    <div className="pages">
      {page > 3 && (
        <Link to={query ? `/${type}/${query}/1` : `/${type}/1`} className="pages__nav">
          В начало
        </Link>
      )}
      <ul className="pages__list">
        {getPaginationList().map((page, i) => {
          return (
            <li key={i}>
              <NavLink
                to={query ? `/${type}/${query}/${page}` : `/${type}/${page}`}
                className={({ isActive }) =>
                  isActive ? ' pages__item pages__item_active' : 'pages__item'
                }
              >
                {page}
              </NavLink>
            </li>
          );
        })}
      </ul>
      {page < totalCountPage && (
        <Link
          to={query ? `/${type}/${query}/${+page + 1}` : `/${type}/${+page + 1}`}
          className="pages__nav"
        >
          Вперед
        </Link>
      )}
    </div>
  );
}

export default Pagination;
