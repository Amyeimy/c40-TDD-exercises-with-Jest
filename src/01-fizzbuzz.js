/* FizzBuzz.

For a given natural number greater than zero return:
- 'fizz' if the number is dividable by 3
- 'buzz' if the number is dividable by 5
- 'fizzbuzz' if the number is dividable by 15
- the input number if no other requirement is fulfilled
*/

function fizzbuzz(number) {
    for (let i = 1; i <= n; i++) {
    let str = "";

    if (i % 3 === 0) str += "fizz"
    if (i % 5 === 0) str += "buzz"
    if (str === "") str = i;
  
    console.log(str);
}

module.exports = fizzbuzz;
