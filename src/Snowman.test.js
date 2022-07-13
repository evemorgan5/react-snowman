import Snowman from "./Snowman";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TEST_IMAGES from "./_testCommon";
import nWrong from "./Snowman";

it("matches snapshot", function () {
  console.log("snowman starting page");
  const { container } = render(
    <Snowman
      images={TEST_IMAGES}
      words="apple"
    />
  );
  expect(container).toMatchSnapshot();
});


it("test Snowman word no longer displayed on completing game", function () {
  const { container } = render(
    <Snowman
      images={TEST_IMAGES}
      words="apple"
    />
  );

  while (nWrong < 7){
    fireEvent.click(container.querySelector(".Snowman-word"));
  }
  expect(container.querySelector(".Letter-buttons")).not.toBeInTheDocument();
})


// it("matches snapshot", function () {
//   console.log("snowman game over page");
//   const { container } = render(
//     <Snowman
//       images={TEST_IMAGES}
//       words="apple"
//     />
//   );
//   let i = 0;
//   while (i < 7){
//     fireEvent.click(container.querySelector(".Snowman-word"));
//     i += 1;
//   }
//   expect(container).toMatchSnapshot();
// });
