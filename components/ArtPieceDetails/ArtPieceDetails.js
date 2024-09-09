import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <ArtPiecePreview image={image} title={title} artist={artist} />
      <div>
        <p>Year: {year}</p>
        <p>Genre: {genre}</p>
      </div>
    </>
  );
}
