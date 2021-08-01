import React from "react";
import ReactDOM from "react-dom";
import TabOneItem from "./TabOneItem";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TabOneItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
