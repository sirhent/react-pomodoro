import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const HeaderLink = styled(NavLink)`
  width: 4.8rem;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;

  color: ${props => props.theme.title_color};

  filter: drop-shadow(0 0 16px transparent);

  transition:
    border-bottom 200ms ease,
    filter 200ms ease,
    color 200ms ease;

  &:hover {
    border-bottom: 3px solid ${(props) => props.theme.brand_primary};
    filter: drop-shadow(0 0 16px ${(props => props.theme.brand_primary_light)});
  }

  &.active {
    color: ${(props) => props.theme.brand_primary_light}
  }
`;
