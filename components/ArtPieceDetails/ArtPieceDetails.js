import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Link from "next/link";
import styled from "styled-components";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <Link href="/art-pieces">
        <StyledButton>Go to Gallery</StyledButton>
      </Link>
      <ArtPiecePreview
        image={image}
        title={title}
        artist={artist}
        height={288}
        width={288}
      />
      <div>
        <p>Year: {year}</p>
        <p>Genre: {genre}</p>
      </div>
    </>
  );
}

const StyledButton = styled.button`
  background-color: #ffb069;
  color: black;
  margin: 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #eeff00;
  }
`;
