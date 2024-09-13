import Spotlight from "../components/SpotlightPiece/SpotlightPiece.js";
import { useState, useEffect } from "react";

export default function SpotlightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const [spotlightPiece, setSpotlight] = useState(null);
  useEffect(() => {
    setSpotlight(pieces[Math.floor(Math.random() * pieces.length)]);
  }, [pieces]);

  return (
    <>
      {spotlightPiece && (
        <Spotlight
          image={spotlightPiece.imageSource}
          artist={spotlightPiece.artist}
          isFavorite={
            artPiecesInfo.find((piece) => piece.slug === spotlightPiece.slug)
              ?.isFavorite
          }
          onToggleFavorite={() => onToggleFavorite(spotlightPiece.slug)}
        />
      )}
    </>
  );
}
