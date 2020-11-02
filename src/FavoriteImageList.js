import React from "react";
import FavoriteImage from "./FavoriteImage";
import "./FavoriteImageList.css";

export default function FavoriteImageList({
  photoIds,
  onClickFavoritesRemove,
  innerTextIcon,
}) {
  return (
    <div className={"favoriteCardList"}>
      {" "}
      {photoIds.map((photoId) => (
        <FavoriteImage
          key={photoId.toString()}
          photoId={photoId}
          onClickFavoritesRemove={onClickFavoritesRemove}
          innerTextIcon={innerTextIcon}
        />
      ))}
    </div>
  );
}
