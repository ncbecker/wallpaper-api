import React from "react";
import { render, screen } from "@testing-library/react";
import FavoriteImageList from "./FavoriteImageList";

it("renders multiple FavoriteImages based on photoIds", () => {
  const photoIds = ["UjD08DRW24E", "k38v31SkZdo", "AW_P_NU9MI8"];
  render(<FavoriteImageList photoIds={photoIds} />);
  const imageElements = screen.getAllByRole("img");
  expect(imageElements.length).toBe(photoIds.length);
});
