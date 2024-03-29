import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import EnergyDistGrid from "./energy-dist-grid";
import pretty from "pretty";

describe("<EnergyDistGrid />", () => {
  const data = {
    from: "2019-10-25T00:00Z", 
    to: "2019-10-25T00:30Z",
    generationmix: [
      { fuel: "biomass", perc: 20 },
      { fuel: "nuclear", perc: 40 },
      { fuel: "wind", perc: 40 }
    ]
  };
  let fetchData: () => any = jest.fn(
    async () => await Promise.resolve({ data })
  );
  let fetchDataError: () => any = jest.fn(
    async () => await Promise.reject("error")
  );

  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("matches snapshot", async () => {
    await act(async () => {
      render(<EnergyDistGrid getData={fetchData} />, container);
    });
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it("3 colums found after data fetch", async () => {
    await act(async () => {
      render(<EnergyDistGrid getData={fetchData} />, container);
    });
    expect(container.querySelectorAll(".col-3").length).toBe(3);
    expect(container.querySelectorAll(".col-3")[0].firstChild.textContent).toBe('biomass20%');
  });

  it("Check if time exist", async () => {
    await act(async () => {
      render(<EnergyDistGrid getData={fetchData} />, container);
    });
    expect(container.querySelectorAll(".time").length).toBe(1);
  });

  it("Loading text disappears after data request.", async () => {
    await act(async () => {
      render(<EnergyDistGrid getData={fetchData} />, container);
    });
    expect(container.querySelectorAll(".loader").length).toBe(0);
  });

  it("Error text after failed data fetch.", async () => {
    await act(async () => {
      render(<EnergyDistGrid getData={fetchDataError} />, container);
    });
    expect(container.querySelectorAll(".error").length).toBe(1);
  });

});
