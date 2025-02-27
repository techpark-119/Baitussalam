let daysOfWeek = prompt("what is the day?");

switch (daysOfWeek.toLowerCase()) {
  case "saturday":
  case "sunday":
    console.log("Wake up at 10am");
    break;
  case "monday":
    console.log("Wake up at 8am");
    break;
  case "tuesday":
  case "wednesday":
    console.log("Wake up at 9am");
    break;
  case "thursday":
    console.log("Wake up at 9:30am");
    break;
  case "friday":
    console.log("Wake up at 8:30am");
    break;
  default:
    console.log("No alarm set for this day");
}
