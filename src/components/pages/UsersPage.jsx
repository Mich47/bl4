import { Button } from 'components/Button/Button';
import { UsersList } from 'components/UsersList/UsersList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/users/users.operations';
import { selectUsers } from 'redux/users/users.selector';

export const UsersPage = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const handlerShowUser = () => {
    dispatch(fetchUsers());
  };
  return (
    <>
      <p>Users</p>
      <Button text="Show users" clickHandler={handlerShowUser} />
      {users.length && <UsersList />}
    </>
  );
};
