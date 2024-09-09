import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <Nav>
      <NavList>
        <NavListItem>
          <StyledLink href="/">Spotlight</StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink href="/art-pieces">Art Pieces</StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink href="#">Favorites</StyledLink>
        </NavListItem>
      </NavList>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: lightgrey;
  z-index: 1000;
`;

const NavList = styled.ul`
  display: flex;
  padding: 0;
  gap: 50px;
  justify-content: space-around;
`;

const NavListItem = styled.li`
  list-style-type: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
