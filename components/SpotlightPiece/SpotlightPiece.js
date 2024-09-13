import styled from "styled-components";
import FavoriteButton from "../FavoriteButton/FavoriteButton.js";
import Image from "next/image";

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 25rem;
`;

const Wrapper = styled.div`
  text-align: center;
  display: grid;
  place-items: center;
`;

export default function Spotlight({
  image,
  artist,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <Wrapper>
      <ImageContainer>
        <Image
          src={image}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt={`spotlight: ${artist}`}
        />
      </ImageContainer>
      <h2>{artist}</h2>
    </Wrapper>
  );
}
