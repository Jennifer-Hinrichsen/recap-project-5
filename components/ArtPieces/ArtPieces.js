import styled from "styled-components";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import { useArtPieces } from "../UseArtPieces/UseArtPieces";
import Link from "next/link";

export default function ArtPieces({ pieces }) {
  const { artPieces, artPiecesInfo, handleToggleFavorite, loading, error } =
    useArtPieces();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading.</p>;


  return (
    <>
      <ul>
        {artPieces.map((piece) => {
          const isFavorite = artPiecesInfo?.[piece.slug]?.isFavorite || false;
          return (
            <StyledList key={piece.slug}>
              <Link href={`/art-pieces/${piece.slug}`}>
                <ArtPiecePreview
                image={piece.imageSource}
                title={piece.name}
                artist={piece.artist}
                height={144}
                width={144}
                isFavorite={isFavorite}
                onToggleFavorite={() => handleToggleFavorite(piece.slug)}
              />
              </Link>
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
