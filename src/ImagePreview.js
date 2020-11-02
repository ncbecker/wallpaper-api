import React from "react";
import "./ImagePreview.css";

export default function ImagePreview({
  src,
  alt,
  author,
  onClickFavorites,
  innerTextIcon,
}) {
  return (
    <div className="image-container">
      <button className="btn__favorites" onClick={onClickFavorites}>
        {innerTextIcon}
      </button>
      <img className="image__thumb" src={src} alt={alt} author={author} />
      <p className="image__author">Author: {author}</p>
    </div>
  );
}
