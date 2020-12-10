// Sum all the numbers of the array except the highest and the lowest number
// If the highest and lowest numbers appear more than once, exclude ALL occurrences
//
// e.g. sumWithoutHighestAndLowest([6, 2, 1, 8, 10]) => 16
// e.g. sumWithoutHighestAndLowest([1, 1, 11, 2, 3]) => 5

// const sumWithoutHighestAndLowest = array => {
// 	// your code here
// };

// module.exports = sumWithoutHighestAndLowest;



function sumWithoutHighestAndLowest(array) {
	if (typeof array === 'object' && array instanceof Array && array.length > 1) {
	  return 1;
	} else {
	  return 0;
	}
  }
  function sumArray(array) {
	var sorted = array.sort(function(a, b) {
	  return a - b
	});
	console.log(`The lowest number is: ${sorted[0]}`);
	console.log(`Array is: ${array}`);
	console.log(`Total is: ${sorted.reduce(function(a, b) { return a + b; }, 0)}`);
	console.log(`The larget number is: ${sorted.slice(-1).pop()}`);
	return sorted.slice(1, -1).reduce(function(a, b) {
	  return a + b;
	}, 0);
  }



// const sumWithoutHighestAndLowest = array => {
//     if (!array) {
//         return 0
//     }
//     let s = 0;
//     array.sort((a, b) => a - b).forEach((a, i) => {
//         if (i !== array.length - 1 && i !== 0) {
//             s += a;
//         }
//     })
//     return s;
// }






//   // ideal case
//   var points = [40, 100, 1, 5, 25, 10];
//   if (validate(points)) {
// 	console.log(`sum of numbers except smallest and largest number is: ${sumArray(points)}`);
//   } else {
// 	console.log("Array validation unsuccessful");
//   }
//   //empty array case
//   var points = [];
//   if (validate(points)) {
// 	console.log(`sum of numbers except smallest and largest number is: ${sumArray(points)}`);
//   } else {
// 	console.log("Array validation unsuccessful");
//   }
//   // single element case
//   var points = [40];
//   if (validate(points)) {
// 	console.log(`sum of numbers except smallest and largest number is: ${sumArray(points)}`);
//   } else {
// 	console.log("Array validation unsuccessful");
//   }
//   //other data type case
//   var points = "x";
//   if (validate(points)) {
// 	console.log(`sum of numbers except smallest and largest number is: ${sumArray(points)}`);
//   } else {
// 	console.log("Array validation unsuccessful");
//   }
//   //null case
//   var points = null;
//   if (validate(points)) {
// 	console.log(`sum of numbers except smallest and largest number is: ${sumArray(points)}`);
//   } else {
// 	console.log("Array validation unsuccessful");
//   }
  

  module.exports = sumWithoutHighestAndLowest;