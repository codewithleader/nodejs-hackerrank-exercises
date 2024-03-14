'use strict';

// Given an array of integers, calculate the RATIOS of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// El radio es la cantidad de elementos del array (arr.length)

export function plusMinus(arr: number[]): void {
  // Write your code here
  let positiveNumbers = 0;
    let negativeNumbers = 0;
    let zeroNumbers = 0;
    for (let num of arr) {
        if (num > 0) {
            positiveNumbers += 1;
        } else if (num < 0) {
            negativeNumbers += 1;
        } else if (num === 0) {
            zeroNumbers += 1;
        }
    }
    console.log(`${(positiveNumbers / arr.length).toFixed(6)}`);
    console.log(`${(negativeNumbers / arr.length).toFixed(6)}`);
    console.log(`${(zeroNumbers / arr.length).toFixed(6)}`);
}
