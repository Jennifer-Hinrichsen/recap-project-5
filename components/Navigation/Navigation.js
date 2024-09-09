import Link from "next/link";
import styled from "styled-components";

export default function Navigation({ className }) {
  return (
    <nav className={className}>
      <StyledNavList>
        <StyledNavListItem>
          <StyledLink href="#">Spotlight</StyledLink>
        </StyledNavListItem>
        <StyledNavListItem>
          <StyledLink href="/art-pieces">Art Pieces</StyledLink>
        </StyledNavListItem>
        <StyledNavListItem>
          <StyledLink href="#">Favorites</StyledLink>
        </StyledNavListItem>
      </StyledNavList>
    </nav>
  );
}

const StyledNavList = styled.ul`
  display: flex;
  padding: 0;
  gap: 50px;
  justify-content: space-around;
`;

const StyledNavListItem = styled.li`
  list-style-type: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
