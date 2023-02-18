import { LinkStyled } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <LinkStyled to="/">Home</LinkStyled>
        </li>
        <li>
          <LinkStyled to="/users">Users</LinkStyled>
        </li>
      </ul>
    </nav>
  );
};
