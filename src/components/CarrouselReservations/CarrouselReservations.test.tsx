import React from "react";
import ReactDOM from "react-dom";
import CarrouselReservations from "./CarrouselReservations";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CarrouselReservations />, div);
  ReactDOM.unmountComponentAtNode(div);
});
