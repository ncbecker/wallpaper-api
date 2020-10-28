import React from "react";
import "./ImagePreview.css";

export default function ImagePreview({ src, alt, author }) {
  return (
    <div className="imageContainer">
      <button
        className="btn__favorites"
        onClick={() => {
          alert("It works");
        }}
      >
        ♡
      </button>
      <img className="imageThumb" src={src} alt={alt} author={author} />
      <p className="imageAuthor">Author: {author}</p>
    </div>
  );
}
