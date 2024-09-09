import styled from "styled-components";
import Navigation from "../Navigation/Navigation";

export default function Layout({ children }) {
  return (
    <StyledContainer>
      <main>{children}</main>
      <Navigation />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  min-height: 100vh;
  position: relative;
  padding-bottom: 60px;
`;
