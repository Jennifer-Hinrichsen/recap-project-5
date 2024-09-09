import styled from "styled-components";
import Image from "next/image";

const StyledButton = styled.button`
  position: absolute;
  z-index: 10;
  top: 10px;
  right: 10px;
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <StyledButton
      onClick={onToggleFavorite}
      aria-label={isFavorite ? "Unfavorite" : "Favorite"}
    >
      <Image
        src="/images/heart.svg"
        alt={isFavorite ? "Unfavorite" : "Favorite"}
        width={24}
        height={24}
        className={isFavorite ? "favorite" : "not-favorite"}
      />
    </StyledButton>
  );
}
