import { getRandomImage } from "./api/getRandomImage";
import "./App.css";
import Button from "./Button";
import ImagePreview from "./ImagePreview";
import React, { useState } from "react";
import FavoriteImageList from "./FavoriteImageList";

function App() {
  const [randomImage, setRandomImage] = useState(null);
  const [currentFavorites, setCurrentFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const iconfull = "♥︎";
  const iconempty = "♡";
  const [iconFav, setIconFav] = useState(iconempty);

  // const isFavorite = currentFavorites.includes(randomImage.id);

  async function handleClick() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
    setIconFav(iconempty);
  }

  function handleClickFavorites() {
    let favorites = null;
    try {
      favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    } catch (error) {
      // Parsing JSON might fail
      console.error(error);
      favorites = [];
    }
    if (favorites.includes(randomImage.id)) {
      // Already added to favorites; return = aborts whole onClick function
      return;
    }
    // Add to a new array (not .push method) to keep immutability
    const newFavorites = [...favorites, randomImage.id];
    setCurrentFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIconFav(iconfull);
  }

  function handleClickFavoritesRemove(id) {
    const newFavorites = currentFavorites.filter((item) => item !== id);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setCurrentFavorites(newFavorites);
    setIconFav(iconempty);
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
          innerTextIcon={iconFav}
        />
      )}
      <FavoriteImageList
        photoIds={currentFavorites}
        onClickFavoritesRemove={handleClickFavoritesRemove}
        innerTextIcon={iconfull}
      />
    </main>
  );
}

export default App;
