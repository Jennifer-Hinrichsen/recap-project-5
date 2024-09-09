import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
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
