import { relativeUnits } from "../src/utils/relative";

describe("Relative Units", () => {
  it("shows array", () => {
    expect(relativeUnits.every((e) => typeof e === "string"));
    expect(relativeUnits.includes("ex")).toBe(true);
    expect(relativeUnits.includes("em")).toBe(true);
    expect(relativeUnits.includes("ch")).toBe(true);
    expect(relativeUnits.includes("rem")).toBe(true);
    expect(relativeUnits.includes("lh")).toBe(true);
    expect(relativeUnits.includes("vw")).toBe(true);
    expect(relativeUnits.includes("vh")).toBe(true);
    expect(relativeUnits.includes("vmin")).toBe(true);
    expect(relativeUnits.includes("vmax")).toBe(true);
    expect(relativeUnits.includes("%")).toBe(true);
  });
});
