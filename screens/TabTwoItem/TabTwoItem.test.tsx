import React from "react";
import ReactDOM from "react-dom";
import TabTwoItem from "./TabTwoItem";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TabTwoItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
