import { getRandomImage } from "./api/getRandomImage";
import "./App.css";
import Button from "./Button";
import ImagePreview from "./ImagePreview";
import React, { useState } from "react";

function App() {
  const [randomImage, setRandomImage] = useState(null);

  async function handleClick() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
  }

  function handleClickFavorites() {
    const oldFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const newFavorites = [...oldFavorites, randomImage.id];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  }

  return (
    <main>
      <Button onClick={() => handleClick()} innerText={"GET RANDOM IMAGE"} />
      {randomImage && (
        <ImagePreview
          src={randomImage.urls.regular}
          alt={randomImage.alt_description}
          author={randomImage.user.name}
          onClickFavorites={() => handleClickFavorites()}
        />
      )}
    </main>
  );
}

export default App;

// async function loadRandomImage() {
//   const randomImage = await getRandomImage;
//   return randomImage;
// }

// const randomImageInfo = loadRandomImage();
