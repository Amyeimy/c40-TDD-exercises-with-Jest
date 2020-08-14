const leapYear = require("../src/02-leapYear");

describe("leapYear", () => {
  xit("should NOT be a leap year in 2019", () => {
    expect(leapYear(2019)).not.toBe(true);
  });
});

// write more test cases to ensure leapYear() works as expected!
