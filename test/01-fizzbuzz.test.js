const fizzbuzz = require("../src/01-fizzbuzz");

describe("fizzbuzz", () => {
  it("should return a number 1 when it's 1", () => {
    expect(fizzbuzz(1)).toBe(1);
  });

  xit("should return fizz when it's 3", function () {
    expect(fizzbuzz(3)).toBe("fizz");
  });
});
