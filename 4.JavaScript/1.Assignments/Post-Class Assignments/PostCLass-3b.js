// 1. console.log vs return
function logExample() {
    console.log("This is printed using console.log");
  }
  
  function returnExample() {
    return "This is returned using return";
  }
  
  console.log("console.log vs return:");
  logExample(); // Outputs directly to console
  const result = returnExample();
  console.log(result); // Outputs the returned value
  console.log("---------------------");
  
  // 2. Function without parameters
  function greet() {
    console.log("Hello, welcome!");
  }
  
  console.log("Function without parameters:");
  greet();
  console.log("---------------------");
  
  // 3. Function without return statement
  function addAndLog(a, b) {
    const sum = a + b;
    console.log(`Sum is: ${sum}`);
  }

  console.log("\u00A9 ArhamAli,All rights reserved");
  
  
  console.log("Function without return statement:");
  addAndLog(3, 5); // Logs sum but returns undefined
  console.log("---------------------");
  
  // 4. Function with multiple return statements
  function checkNumber(num) {
    if (num > 0) return "Positive";
    else if (num < 0) return "Negative";
    else return "Zero";
  }
  
  console.log("Function with multiple returns:");
  console.log(checkNumber(5));   // "Positive"
  console.log(checkNumber(-3));  // "Negative"
  console.log(checkNumber(0));   // "Zero"
  console.log("---------------------");
  
  // 5. Loop over 2D array with dynamic formatting
  const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log("2D Array Loop:");
  for (let row = 0; row < array.length; row++) {
    for (let col = 0; col < array[row].length; col++) {
      console.log(`Item at row ${row} and column ${col} is ${array[row][col]}.`);
    }
  }
  console.log("\u00A9 ArhamAli,All rights reserved");
  console.log("---------------------");
  
  // 6. Function with default parameters
  function greetUser(name = "User") {
    console.log(`Hello, ${name}!`);
  }
  
  console.log("Function with default parameters:");
  greetUser(); // "Hello, User!"
  greetUser("Alice"); // "Hello, Alice!"
  console.log("---------------------");
  
  // 7. Function with variable number of arguments
  function sumNumbers(...nums) {
    let sum = 0;
    for (const num of nums) {
      sum += num;
    }
    return sum;
  }
  
  console.log("Function with variable number of arguments:");
  console.log(sumNumbers(1, 2, 3)); // 6
  console.log(sumNumbers(1, 2, 3, 4, 5)); // 15
  console.log("---------------------");
  
  console.log("\u00A9 ArhamAli,All rights reserved");
  
  // 8. Function with named parameters
  function greetPerson({ name, age }) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  }
  
  console.log("Function with named parameters:");
  greetPerson({ name: "Alice", age: 30 }); // "Hello, Alice! You are 30 years old."
  greetPerson({ age: 25, name: "Bob" }); // "Hello, Bob! You are 25 years old."
  console.log("---------------------");
  
  // 9. Function with named and default parameters
  function greetPerson2({ name = "User", age = 18 }) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  }
  
  console.log("Function with named and default parameters:");
  greetPerson2({ name: "Alice", age: 30 }); // "Hello, Alice! You are 30 years old."
  greetPerson2({ name: "Bob" }); // "Hello, Bob! You are 18 years old."
  greetPerson2({ age: 25 }); // "Hello, User! You are 25 years old."
  greetPerson2({}); // "Hello, User! You are 18 years old."
  console.log("---------------------");
  
  // 10. Function with named parameters and default values
  function greetPerson3({ name = "User", age = 18 } = {}) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  }

console.log("\u00A9 ArhamAli,All rights reserved");
console.log("Code by ArhamAli");