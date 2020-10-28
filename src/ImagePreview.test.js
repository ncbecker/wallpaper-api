import React from "react0";
import ReactDOM from "react-dom";
import ImagePreview from "./ImagePreview";

it("renders withour crashin", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ImagePreview />, div);
});
