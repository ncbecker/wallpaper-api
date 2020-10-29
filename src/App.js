import { getRandomImage } from "./api/getRandomImage";
import "./App.css";
import Button from "./Button";
import ImagePreview from "./ImagePreview";
import React, { useState } from "react";
import FavoriteImageList from "./FavoriteImageList";

function App() {
  const [randomImage, setRandomImage] = useState(null);

  async function handleClick() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
  }

  function handleClickFavorites() {
    let favorites = null;
    const imageId = randomImage.id;
    try {
      favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    } catch (error) {
      // Parsing JSON might fail
      console.error(error);
      favorites = [];
    }
    if (favorites.includes(imageId)) {
      // Already added to favorites; return = aborts whole onClick function
      return;
    }
    // Add to a new array (not .push method) to keep immutability
    const newFavorites = [...favorites, imageId];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  }

  const photoIds = JSON.parse(localStorage.getItem("favorites")) || [];

  // const favoriteCards = photoIds.map((photoId) => (
  //   <FavoriteImage key={photoId.toString()} photoId={photoId} />
  // ));

  // function createFavoriteCards(photoId) {
  //   newFavorites.forEach((photoId) => FavoriteImage(photoId));
  // }

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
      <div>
        <FavoriteImageList photoIds={photoIds} />
        {/* {favoriteCards} */}
        {/* <createFavoriteCards /> */}
        {/* <div>{favoriteCards}</div> */}
        {/* {newFavorites.forEach(element => {}});} */}
        {/* <FavoriteImage /> */}
      </div>
    </main>
  );
}

export default App;

// async function loadRandomImage() {
//   const randomImage = await getRandomImage;
//   return randomImage;
// }

// const randomImageInfo = loadRandomImage();
