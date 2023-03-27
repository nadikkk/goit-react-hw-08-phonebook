import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  margin: 10px auto;
  padding: 10px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 50px
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  font-size: 1em;
  margin: 0.5em;
  padding: 4px;
  &.active {
	color: #1976d2;
    border-bottom: 2px solid #1976d2;
  }
`;
