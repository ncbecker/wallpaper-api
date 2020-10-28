import React from "react";
import "./FavoriteImage.css";

export default function FavoriteImage() {
  return (
    <div className="favoriteCard">
      <img
        className="favoriteCard__img"
        src={"https://source.unsplash.com/UjD08DRW24E"}
        alt={"Unknown"}
      />
    </div>
  );
}
