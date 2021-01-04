import { absoluteUnits } from "../src/utils";

describe("Absolute Units", () => {
  it("shows array", () => {
    expect(absoluteUnits.every((e) => typeof e === "string"));
    expect(absoluteUnits.includes("cm")).toBe(true);
    expect(absoluteUnits.includes("mm")).toBe(true);
    expect(absoluteUnits.includes("Q")).toBe(true);
    expect(absoluteUnits.includes("in")).toBe(true);
    expect(absoluteUnits.includes("pc")).toBe(true);
    expect(absoluteUnits.includes("pt")).toBe(true);
    expect(absoluteUnits.includes("px")).toBe(true);
  });
});
