import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectUsers } from 'redux/users/users.selector';

export const UsersList = () => {
  const users = useSelector(selectUsers);
  const location = useLocation();
  return (
    <ul>
      {users.map(({ id, name }) => {
        return (
          <li key={id}>
            <Link to={id} state={{ from: location }}>
              <p>{name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
