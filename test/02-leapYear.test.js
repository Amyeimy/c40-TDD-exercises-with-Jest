const leapYear = require("../src/02-leapYear");

describe("leapYear", () => {
  it("should NOT be a leap year in 2019", () => {
    expect(leapYear(2019)).not.toBe(true);
  });

  it("should be a leap year in 2020", () => {
    expect(leapYear(2020)).not.toBe(false);
  });

  it("should NOT be a leap year in 1800", () => {
    expect(leapYear(1800)).not.toBe(true);
  });

  it("should be a leap year in 1600", () => {
    expect(leapYear(1600)).not.toBe(false);
  });

  it("should be NOT a leap year in 1700", () => {
    expect(leapYear(1700)).not.toBe(true);
  });

});




// write more test cases to ensure leapYear() works as expected!

/**
 * Create a function which takes a number and calculate
 * if it's a leap year (it has a February 29th)
 *
 * It's a leap year if the year is divisible by 4.
 *
 * If the year is divisible by 100, it's NOT a leap year.
 * (The year 1700, 1800, and 1900 are NOT leap years)
 *
 * The exception to the rule above:
 * if a year is divisible by 400, it IS a leap year after
 * all (2000, 1600 WERE leap years.)
 */