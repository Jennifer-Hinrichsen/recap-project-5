import useSWR from "swr";

async function fetcher(url) {
  const result = await fetch(url);
  return await result.json();
}

export function useArtPieces() {
  const { data: artPieces, error: artPiecesError } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  const { data: artPiecesInfo, mutate } = useSWR("favorites", {
    initialData: {},
    revalidateOnFocus: false,
  });

  // Toggle favorite function
  const handleToggleFavorite = (slug) => {
    const isFavorite = artPiecesInfo[slug]?.isFavorite || false;
    const updatedInfo = {
      ...artPiecesInfo,
      [slug]: { isFavorite: !isFavorite },
    };
    mutate(updatedInfo, false);
  };

  return {
    artPieces,
    artPiecesInfo,
    handleToggleFavorite,
    loading: !artPieces && !artPiecesError,
    error: artPiecesError,
  };
}
