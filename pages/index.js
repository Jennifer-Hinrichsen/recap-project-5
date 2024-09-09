import ArtPieces from "@/components/ArtPieces/ArtPieces";
import SpotlightPiece from "@/components/SpotlightPiece/SpotlightPiece";

export default function HomePage({ data }) {
  return (
    <div>
      <SpotlightPiece pieces={data} />
      <ArtPieces pieces={data} />
    </div>
  );
}
