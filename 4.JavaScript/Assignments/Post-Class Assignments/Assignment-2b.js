// function findLargestNumber(obj) {
//     if (obj.length === 0) {
//         return null;
//     }
//     let largest = obj[0];
//     for (let i = 1; i < obj.length; i++) {
//         if (obj[i] > largest) {
//             largest = obj[i];
//         }
//     }
//     return largest;
// }

// const numbers = {a:3, b:5, c:7, d:2, e:8, f:-1, g:4, h:10, i:12};
// const largestNumber = findLargestNumber(numbers);
// console.log("The largest number is:", largestNumber);

var ToDo = [];
console.log("Welcome to your To-Do List App! Type Add to Add a task, Remove to remove a task, List to list all the tasks, and Quit to quit the app.");
do  {
    var prompt1 = prompt("What would you like to do?");

    if(prompt1 === "Add") {
     var task = prompt("What task would you like to add?");
     ToDo.push(task);
    }
    else if(prompt1 === "Remove") {
     var remove = prompt("Which task would you like to remove?");
     var index = ToDo.indexOf(remove);
     ToDo.splice(index, 1);
    }
    else if (prompt1 === "List") {
     for (var i = 0; i < ToDo.length; i++) {
     console.log(ToDo[i]);
     }
    }
    else if (prompt1 === "Quit") {
    console.log("Goodbye!");
    break
    }
    else {
    console.log("Invalid input. Please try again.");
    }
} while (prompt1 !== "Quit");