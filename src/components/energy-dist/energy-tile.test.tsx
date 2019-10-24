import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import EnergyTile from "./energy-tile";
import pretty from "pretty";

describe("<EnergyTile />", () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      render(<EnergyTile fuel={"coal"} percentage={10} index={0} />, container);
    });
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("matches snapshot", () => {
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it("Name Appears", () => {
    expect(container.querySelectorAll("label").length).toBe(1);
  });

  it("Percentage Appears", async () => {
    expect(container.querySelectorAll("h5").length).toBe(1);
  });
});
