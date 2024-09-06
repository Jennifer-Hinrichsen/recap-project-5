import Image from "next/image";
export default function ArtPieces({ pieces }) {
  return (
    <>
      <ul>
        {pieces.map((piece) => {
          return (
            <>
              <li key={piece.slug}>
                <Image
                  src={piece.imageSource}
                  height={144}
                  width={144}
                  alt={`Picture of ${piece.name}`}
                />
                <h3>{piece.name}</h3>
                <p>{piece.artist}</p>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
