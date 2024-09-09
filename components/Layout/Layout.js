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
  padding-bottom: 60px;
`;

const StyledNavigation = styled(Navigation)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: lightgrey;
  z-index: 1000;
`;
