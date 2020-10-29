import React from "react";
import FavoriteImage from "./FavoriteImage";

export default function FavoriteImageList({ photoIds }) {
  const favoriteCards = photoIds.map((photoId) => (
    <FavoriteImage key={photoId.toString()} photoId={photoId} />
  ));
  return favoriteCards;
}
