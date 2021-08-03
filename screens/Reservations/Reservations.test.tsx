import React from "react";
import ReactDOM from "react-dom";
import Reservations from "./Reservations";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Reservations />, div);
  ReactDOM.unmountComponentAtNode(div);
});
