var ToDo = [];
task = prompt("Welcome to your To-Do List App! Type Add to Add a task, Remove to remove a task, List to list all the tasks, and Quit to quit the app.");

if(prompt === "Add") {
    ToDo.push(task);
}
else if(prompt === "Remove") {
    var remove = prompt("Which task would you like to remove?");
    var index = ToDo.indexOf(remove);
    ToDo.splice(index, 1);
}
else if (prompt === "List") {
    for (var i = 0; i < ToDo.length; i++) {
        console.log(ToDo[i]);
    }
}
else if (prompt === "Quit") {
    console.log("Goodbye!");
}