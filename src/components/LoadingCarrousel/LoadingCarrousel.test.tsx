import React from "react";
import ReactDOM from "react-dom";
import LoadingCarrousel from "./LoadingCarrousel";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LoadingCarrousel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
