/* Rutherford Labbe: 02-02-2024 */

/* ------------------------- NOTES -------------------------- */

// Fastest way to flatten an array full of nested arrays

/* --------------- The flat() Method --------------- */
/**
 * let arrays = [[1, 2, 3], [4, 5], [6]];
 * let flattenArray = arrays.flat();
 * console.log(flattenArray);
 * */
/* --------------- The flat() Method --------------- */

/* ------- The concat Method + spread operator ------ */
/**
 * let arrays = [[1, 2, 3], [4, 5], [6]];
 * let flattenArray = [].concat(...arrays);
 * console.log(flattenArray);
 * */
/* ------- The concat Method + spread operator ------ */


/* ------------------------- NOTES -------------------------- */


// 3-1. flattening(list)

// An array containing arrays
let arrays = [[1, 2, 3], [4, 5], [6]];

// Your code here.

// Using reduce to flatten the array using the reduce and concat method + the spread operator
const flattenArray = arrays.reduce(function(accumulator, currentArray) {
    return accumulator.concat(...currentArray);
  }, []);

// Print result on console
console.log(flattenArray);



/* ---------------------------- Section Divider ----------------------------- */

// 3-2. loop(value, test, update, body)

// Your code here.

// Pass a number, first function, second function, and a third function (console.log)
function loop(value, testFunction, updateFunction, bodyFunction) {

    // Start with the upper bound and decrement down by 1
    for(let i = value; i > 0; i--){
        // Pass the value through the function (A simple comparison - is the value greater than zero)
        testFunction(value);
        // Pass the value through the function (console.log(value))
        bodyFunction(value);
        // Pass the value through the function (Takes the value and substract 1 from it - overwrite value with this new value)
        value = updateFunction(value);
    }

}

// Pass a number, first function, second function, and a third function (console.log)
loop(3, n => n > 0, n => n - 1, console.log);


/* ---------------------------- Section Divider ----------------------------- */

function everyLoop(array, test)
{
  // Your code here.

  
}

function everySome(array, test)
{
// Your code here.
}

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true


/* ---------------------------- Section Divider ----------------------------- */