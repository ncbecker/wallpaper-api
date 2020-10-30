import { without } from "./arrays";

it("creates new numbers array without a number", () => {
  const numbers = [1, 3, 7, 8, 11, 13];
  const primNumbers = without(numbers, 8);
  expect(primNumbers).toEqual([1, 3, 7, 11, 13]);
});

it("creates new string array without a string", () => {
  const photoIds = ["UjD08DRW24E", "k38v31SkZdo", "AW_P_NU9MI8"];
  const newPhotoIds = without(photoIds, "UjD08DRW24E");
  expect(newPhotoIds).toEqual(["k38v31SkZdo", "AW_P_NU9MI8"]);
});
