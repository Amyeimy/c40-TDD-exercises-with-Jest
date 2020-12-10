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


// function leapYear() {}

// module.exports = leapYear;



function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

module.exports = leapYear;