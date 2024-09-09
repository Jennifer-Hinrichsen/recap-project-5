import SpotlightPiece from "@/components/SpotlightPiece/SpotlightPiece";

export default function SpotlightPage({ data }) {
  return (
    <div>
      <SpotlightPiece pieces={data} />
    </div>
  );
}
