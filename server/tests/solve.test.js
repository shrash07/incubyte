const { add } = require("../services/solve");

describe("Add function", () => {
  it("empty string should return 0", async () => {
    const result = await add("");
    expect(result?.answer).toBe(0);
  });
  it("single number string to rteturn that number", async () => {
    const result = await add("7");
    expect(result?.answer).toBe(7);
  });
  it("string to return sum of numbers", async () => {
    const result = await add("1,5");
    expect(result?.answer).toBe(6);
  });
  it("string to return sum of numbers even with new line", async () => {
    const result = await add("1,\n5,6");
    expect(result?.answer).toBe(12);
  });
  it("string to support delimiters and return sum of numbers", async () => {
    const result = await add("//;\\n1;2");
    expect(result?.answer).toBe(3);
  });
  it("string to support delimiters and return sum of numbers", async () => {
    try {
      await add("-3,1");
    } catch (e) {
      const result = e?.message?.startsWith("Negative numbers not allowed");
      expect(result).toBe(true);
    }
  });
});
