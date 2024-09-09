import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledNavContainer>
      <StyledNavList>
        <StyledNavListItem>
          <Link href="#">Spotlight</Link>
        </StyledNavListItem>
        <StyledNavListItem>
          <Link href="#">Art Pieces</Link>
        </StyledNavListItem>
        <StyledNavListItem>
          <Link href="#">Favorites</Link>
        </StyledNavListItem>
      </StyledNavList>
    </StyledNavContainer>
  );
}

const StyledNavContainer = styled.div`
  display: flex;
`;

const StyledNavList = styled.ul`
  padding: 0;
`;

const StyledNavListItem = styled.li`
  list-style-type: none;
`;
