import React from "react";
import "./FavoriteImage.css";

export default function FavoriteImage({
  photoId,
  onClickFavoritesRemove,
  innerTextIcon,
}) {
  return (
    <div className="favoriteCard">
      <button
        className="btn__favorites"
        onClick={() => onClickFavoritesRemove(photoId)}
      >
        {innerTextIcon}
      </button>
      <img
        className="favoriteCard__img"
        src={`https://source.unsplash.com/${photoId}`}
        alt={`Favorite ${photoId}`}
      />
    </div>
  );
}
