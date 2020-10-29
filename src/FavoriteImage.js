import React from "react";
import "./FavoriteImage.css";

export default function FavoriteImage({ photoId }) {
  return (
    <div className="favoriteCard">
      <img
        className="favoriteCard__img"
        src={`https://source.unsplash.com/${photoId}`}
        alt={`Favorite ${photoId}`}
      />
    </div>
  );
}
