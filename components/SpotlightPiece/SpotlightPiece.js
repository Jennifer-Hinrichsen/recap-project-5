import Image from "next/image";
import styled from "styled-components";

export default function SpotlightPiece({ pieces }) {
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const randomArtPiece = getRandomElement(pieces);
  return (
    <StyledSpotlightContainer>
      <Image
        src={randomArtPiece.imageSource}
        height={288}
        width={288}
        alt={`Picture of ${randomArtPiece.name}`}
      />
      <h3>{randomArtPiece.name}</h3>
      <p>{randomArtPiece.artist}</p>
    </StyledSpotlightContainer>
  );
}
const StyledSpotlightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
