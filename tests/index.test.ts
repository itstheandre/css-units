import cssLengths from "../src";

describe("css Lengths", () => {
  it("works", () => {
    expect(Array.isArray(cssLengths.absolute)).toBe(true);
    expect(Array.isArray(cssLengths.relative)).toBe(true);
    expect(Array.isArray(cssLengths.all)).toBe(true);
  });
  it("adds the two arrays", () => {
    const { absolute, relative, all } = cssLengths;
    expect(JSON.stringify([...absolute, ...relative])).toBe(
      JSON.stringify(all)
    );
  });
});
