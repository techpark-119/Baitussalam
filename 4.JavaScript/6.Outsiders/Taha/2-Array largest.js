// let numbers = [1,2,3,4,5];
// let sum = 0;
// for (let i = 0; i< numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(sum);

let numbers = [1,2,3,4,5];
let largest = numbers[0];
for (let i = 1; i< numbers.length; i++) {
    if (numbers[i] > largest){
        largest = numbers [i]
    }
}
console.log(largest);   