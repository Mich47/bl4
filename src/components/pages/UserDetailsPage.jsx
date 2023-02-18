import { Button } from 'components/Button/Button';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { deleteUser, fetchUserDetails } from 'redux/users/users.operations';
import { selectUserDetails } from 'redux/users/users.selector';

export const UserDetailsPage = () => {
  // const [isModalShow, setIsModalOpen] = useState(false);
  const dispatch = useDispatch(selectUserDetails);
  const user = useSelector(selectUserDetails);
  const { id } = useParams();
  const location = useLocation();

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchUserDetails(id));
  }, [id, dispatch]);

  const handlerDelete = () => {
    dispatch(deleteUser(id));
    navigate('/users');
  };

  return (
    <>
      {user && (
        <>
          <Link to={location?.state?.from ?? '/'}>Back</Link>
          <img src={user.avatar} alt={user.name} width="100" />
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Pet: {user.pet}</p>
        </>
      )}
      <Button
        text="delete"
        clickHandler={() => {
          handlerDelete();
          // setIsModalOpen(true);
        }}
      />
      {/* {isModalShow && <Modal />} */}
    </>
  );
};
