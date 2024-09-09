import SpotlightPiece from "@/components/SpotlightPiece/SpotlightPiece";
import styled from "styled-components";

export default function SpotlightPage({ data }) {
  return (
    <div>
      <StyledTitle>ART GALLERY</StyledTitle>
      <SpotlightPiece pieces={data} />
    </div>
  );
}

const StyledTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 50px;
`;
