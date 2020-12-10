const fizzbuzz = require("../src/01-fizzbuzz");

describe("fizzbuzz", () => {
  it("should return a number 1 when it's 1", () => {
    expect(fizzbuzz(1)).toBe(1);
  });

  it("should return fizz when it's 3", function () {
    expect(fizzbuzz(3)).toBe("fizz");
  });

  it("should return buzz when it's 5", () => {
    expect(fizzbuzz(5)).toBe('buzz');
  });

  it("should return fizzbuzz when it's 15", () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  });
});