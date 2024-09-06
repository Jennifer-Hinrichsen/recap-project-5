import Image from "next/image";
export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <Image src={image} height={144} width={144} alt={`Picture of ${title}`} />
      <h3>{title}</h3>
      <p>{artist}</p>
    </>
  );
}
