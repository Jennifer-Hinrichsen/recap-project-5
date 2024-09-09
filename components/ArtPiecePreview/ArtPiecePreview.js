import Image from "next/image";
export default function ArtPiecePreview({
  image,
  title,
  artist,
  height,
  width,
}) {
  return (
    <>
      <Image
        src={image}
        height={height}
        width={width}
        alt={`Picture of ${title}`}
      />
      <h3>{title}</h3>
      <p>{artist}</p>
    </>
  );
}
