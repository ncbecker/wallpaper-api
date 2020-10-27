import "./App.css";
import ImagePreview from "./ImagePreview";

function App() {
  return (
    <main>
      <button>GET RANDOM IMAGE</button>
      <ImagePreview
        src={
          "https://images.unsplash.com/photo-1603726964374-b9f6e020f0e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80"
        }
        alt={"Surfer"}
        author={"Unsplash"}
      />
    </main>
  );
}

export default App;
