const { add } = require("../services/solve");

describe("Add function", () => {
    it("empty string should return 0", () => {
      const result = add("")
      expect(result).toBe(0)
    });
    it("single number string to rteturn that number", () => {
      const result = add("7");
      expect(result).toBe(7);
    });
    it("string to return sum of numbers", () => {
      const result = add("1,5");
      expect(result).toBe(6);
    });
    it("string to return sum of numbers even with new line", () => {
      const result = add("1,\n5,6");
      expect(result).toBe(12);
    });
    it("string to support delimiters and return sum of numbers", () => {
      const result = add("//;\n1;2");
      expect(result).toBe(3);
    });
  it("string to support delimiters and return sum of numbers", () => {
    try {
      add("-3,1");
    } catch (e) {
      expect(e?.message).toBe("Negative numbers are not allowed");
    }
  });
});
