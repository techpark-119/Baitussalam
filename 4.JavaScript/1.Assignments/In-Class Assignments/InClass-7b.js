// // Calback function exercise
// const calculate = (a, b, callback) => callback(a, b);
// const add=(a,b)=>console.log(a+b);
// const subtract=(a,b)=>console.log(a-b);
// const multiply=(a,b)=>console.log(a*b);
// const divide=(a,b)=>console.log(a/b);
// calculate(4, 2, add);
// calculate(4, 2, subtract);
// calculate(4, 2, multiply);
// calculate(4, 2, divide);

// //Map Exercise 01

// const students = [
//     { firstName: 'Alice', lastName: 'Smith' },
//     { firstName: 'Bob', lastName: 'Johnson' },
//     { firstName: 'Charlie', lastName: 'Williams' }
// ];

// const fullNames = students.map(student => `${student.firstName} ${student.lastName}`);
// console.log(fullNames);

// //another way
// const operation = (students) => students.firstName + " " + students.lastName;
// console.log(students.map(operation));

// //filter Exercise 01

// const numbers = [4, 3, 9, 2, 8, 12, 13, 1, 6, 7];
// const greaterthan10 = numbers.filter(numbers => numbers > 10);
// console.log(greaterthan10);

// Map and filter combine

// const participants = [
//     { firstName: 'Alice', score: 88 },
//     { firstName: 'Bob', score: 56 },
//     { firstName: 'Charlie', score: 91 },
//     { firstName: 'David', score: 68 },
//     { firstName: 'Emily', score: 55 }
// ];
// participants.filter(bestparticipants => participants.score > 60);
// participants.map(participants => participants.firstName);

// Destructuring Exercise
