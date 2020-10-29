import React from "react";
import ReactDOM from "react-dom";
import ImagePreview from "./ImagePreview";
import { render, screen } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ImagePreview author="Leon" />, div);
});

test("renders author", () => {
  render(<ImagePreview author="Leon" />);
  const author = screen.getByText(/Author: Leon/i);
  expect(author).toBeInTheDocument();
});
