import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const LinkStyled = styled(NavLink)`
  color: #020332;
  &.active {
    color: tomato;
  }
`;
