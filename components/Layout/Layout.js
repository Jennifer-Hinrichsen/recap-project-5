import styled from "styled-components";
import Navigation from "../Navigation/Navigation";

export default function Layout({ children }) {
  return (
    <StyledContainer>
      <main>{children}</main>
      <StyledNavigation />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  min-height: 100vh;
  position: relative;
`;

const StyledNavigation = styled(Navigation)`
  position: absolute;
  bottom: 0;
  background-color: lightgrey;
  width: 100vw;
`;
