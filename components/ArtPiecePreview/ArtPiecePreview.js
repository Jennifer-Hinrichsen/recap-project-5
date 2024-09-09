import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  height,
  width,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <Container>
      <ArtFrame>
        <StyledImage
          src={image}
          height={height}
          width={width}
          alt={`Picture of ${title}`}
        />
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      </ArtFrame>
      <h3>{title}</h3>
      <p>{artist}</p>
    </Container>
  );
}


const Container = styled.div`
  text-align: center;
`;

const ArtFrame = styled.div`
  display: inline-block;
  padding: 10px;
  border: 16px solid #a28834;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  position: relative;
`;

const StyledImage = styled(Image)`
  display: block;
  max-width: 100%;
  height: auto;
`;
