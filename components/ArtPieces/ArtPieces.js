import styled from "styled-components";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
export default function ArtPieces({ pieces }) {
  return (
    <>
      <ul>
        {pieces.map((piece) => {
          return (
            <StyledList key={piece.slug}>
              <ArtPiecePreview
                image={piece.imageSource}
                title={piece.name}
                artist={piece.artist}
                height={144}
                width={144}
              />
            </StyledList>
          );
        })}
      </ul>
    </>
  );
}
const StyledList = styled.li`
  list-style-type: none;
`;
