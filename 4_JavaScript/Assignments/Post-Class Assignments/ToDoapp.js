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