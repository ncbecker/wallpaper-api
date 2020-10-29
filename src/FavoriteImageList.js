import React from "react";
import FavoriteImage from "./FavoriteImage";
import "./FavoriteImageList.css";

export default function FavoriteImageList({ photoIds }) {
  return (
    <div className={"favoriteCardList"}>
      {" "}
      {photoIds.map((photoId) => (
        <FavoriteImage key={photoId.toString()} photoId={photoId} />
      ))}
    </div>
  );
}
