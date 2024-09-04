/**
 * Use a for...of loop to concatenate all the elements of an array into a single string.
 */

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let str = '';

for (const number of numbers) {
    str.concat(number);
}
console.log(str);