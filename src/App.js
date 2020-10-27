import { getRandomImage } from "./api/getRandomImage";
import "./App.css";
import Button from "./Button";
import ImagePreview from "./ImagePreview";

function App() {
  // const randomImageInfo = async function loadRandomImage(url) {
  //   const randomImage = await getRandomImage;
  //   return randomImage;
  // };

  /*randomImageInfo.urls.thumb*/

  return (
    <main>
      <Button innerText={"GET RANDOM IMAGE"} />
      <ImagePreview
        src={
          "https://images.unsplash.com/photo-1526485856375-9110812fbf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
        }
        alt={"Surfer"}
        author={"Unsplash"}
      />
    </main>
  );
}

export default App;
