import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import EnergyTile from "./energy-tile";
import pretty from "pretty";
import {uid} from 'react-uid';

describe("<EnergyTile />", () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      render(<EnergyTile fuel={"coal"} percentage={10} uid={uid('5')} />, container);
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
    expect(container.querySelector("label").textContent).toBe('coal');
  });

  it("Percentage Appears", async () => {
    expect(container.querySelectorAll("h5").length).toBe(1);
    expect(container.querySelector("h5").textContent).toBe('10%');
  });
});
