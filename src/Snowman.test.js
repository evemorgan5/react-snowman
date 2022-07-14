import Snowman from "./Snowman";
import React from "react";
import { fireEvent, render } from "@testing-library/react";


// let renderedGame;

// beforeEach(function () {
//   renderedGame = render(<Snowman maxWrong={MAX_WRONG} words={["apple"]} />);
// });

// // sets initial render of html of component
// //then compares current render to initial render of html of component
// it("matches snapshot on initial render", function () {
//   console.log("snowman starting page");
//   const { container } = render(
//     <Snowman
//       words={["apple"]}
//       maxWrong={6}
//     />
//   );
//   expect(container).toMatchSnapshot();
// });


it("test Letter buttons are no longer displayed on completing game", function () {
  const { container } = render(
    <Snowman
      words={["apple"]}
      maxWrong={1}
    />
   )

  fireEvent.click(container.querySelector("#b"));
  expect(container.querySelector(".Letter-buttons")).not.toBeInTheDocument();
});


