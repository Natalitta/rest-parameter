/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
const addAll = (a, b, c) => a + b + c;
let sum = addAll(1, 2, 3);
console.log("Sum:", sum);

// Extra arguments are ignored
let sum2 = addAll(1, 2, 3, 4, 5);
console.log(sum2);

// Function using ...rest
let sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;
};
let sum3 = sumRest(1, 2, 3, 4, 5);
console.log(sum3);