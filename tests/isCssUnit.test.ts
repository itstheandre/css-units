import { isCssUnit } from "../src/utils/isCssUnit";

describe("isCssUnit", () => {
  it("works with no arg", () => {
    expect(isCssUnit()).toBeFalsy();
    expect(isCssUnit()).toBe(false);
  });
  it("works with arg", () => {
    expect(isCssUnit("em")).toBe(true);
    expect(isCssUnit("fc")).toBe(false);
  });
});
