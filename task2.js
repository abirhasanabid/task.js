/**
 * Write a JavaScript code to get the even numbers from an array using any looping technique.
 */


const numbers = [12, 98, 5, 41, 23, 78, 46];


for (const num of numbers) {
    if (num % 2 === 0){
        console.log('even number :',num)
    }
    else{
        console.log('odd number :',num)
    }
}