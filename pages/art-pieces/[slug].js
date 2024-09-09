import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";


export default function ArtPiecePage() {
  const router = useRouter();
  const { slug } = router.query;

  const artPiece = /*artPiecesData*/.find((piece) => piece.slug === slug);

  return (
    <ArtPieceDetails
      image={artPiece.imageSource}
      title={artPiece.name}
      artist={artPiece.artist}
      year={artPiece.year}
      genre={artPiece.genre}
    />
  );
}
