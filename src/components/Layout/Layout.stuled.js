import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom: solid 3px lightgreen;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const List = styled.li`
  font-size: 24px;
`;

export const ListText = styled(NavLink)`
  transition: color 0.2s ease-in-out;
  color: #000000;

  &.active,
  &:hover,
  &:focus {
    color: orange;
  }
`;
