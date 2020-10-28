import React from "react";
import "./ImagePreview.css";

export default function ImagePreview({ src, alt, author, onClickFavorites }) {
  return (
    <div className="imageContainer">
      <button className="btn__favorites" onClick={onClickFavorites}>
        ♡
      </button>
      <img className="imageThumb" src={src} alt={alt} author={author} />
      <p className="imageAuthor">Author: {author}</p>
    </div>
  );
}
