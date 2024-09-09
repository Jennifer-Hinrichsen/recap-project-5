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
      <ImageWrapper>
        <Image
          src={image}
          height={height}
          width={width}
          alt={`Picture of ${title}`}
        />
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      </ImageWrapper>
      <h3>{title}</h3>
      <p>{artist}</p>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;
const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
`;
