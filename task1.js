/**
 * Write a JavaScript code to reverse the array colors without using the reverse method.
 */

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let newArr = [];

for (const color of colors) {
    const str = color;
    newArr.unshift(color);
}
console.log(newArr);
