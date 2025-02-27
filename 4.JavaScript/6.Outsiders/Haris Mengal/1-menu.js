var day = prompt("what is the day?");
var budget = prompt("what's your budget?");

if (day == "monday") {
  if (budget <= 500) {
    console.log("Order 1 pizza + 1 drink.");
  } else if (budget > 500 && budget <= 1000) {
    console.log("Order 2 pizzas + 2 drinks.");
  } else if (budget > 1000 && budget <= 1500) {
    console.log("Order 3 pizzas + 3 drinks + dessert.");
  } else {
    console.log(
      "Premium package: Order 5 pizzas + 5 chicken roll + 5 drinks. "
    );
  }
} else if (day == "tuesday") {
  if (budget <= 500) {
    console.log("Order 1 sandwich + 1 soup.");
  } else if (budget > 500 && budget <= 1000) {
    console.log("Order 2 sandwiches + 2 soups.");
  } else if (budget > 1000 && budget <= 1500) {
    console.log("Order 3 sandwiches + 3 soups + salad.");
  } else {
    console.log("Premium package: Order 5 sandwiches + 5 soups + 2 salads.");
  }
} else if (day == "wednesday") {
  if (budget <= 500) {
    console.log("Order 1 burger + fries.");
  } else if (budget > 500 && budget <= 1000) {
    console.log("Order 2 burgers + fries.");
  } else if (budget > 1000 && budget <= 1500) {
    console.log("Order 3 burgers + fries + drink.");
  } else {
    console.log("Premium package: Order 5 burgers + fries + 2 drinks.");
  }
} else if (day == "thursday") {
  if (budget <= 500) {
    console.log("Order 1 malai boti roll + fries.");
  } else if (budget > 500 && budget <= 1000) {
    console.log("Order 2 burgers + 1 zinger roll.");
  } else if (budget > 1000 && budget <= 1500) {
    console.log("Order 3 burgers + 2 small pizza +  salad + drink.");
  } else {
    console.log("Premium package: Order 5 burgers + 3 sandwiches + 3 drinks.");
  }
} else if (day == "firday") {
  if (budget <= 500) {
    console.log("10 dishes Buffet");
  } else if (budget > 500 && budget <= 1000) {
    console.log("20 dishes Buffet");
  } else if (budget > 1000 && budget <= 1500) {
    console.log("30 dishes Buffet");
  } else {
    console.log("Premium package: 60+ dishes Buffet");
  }
} else if (day == "sunday") {
  if (budget <= 500) {
    console.log("Order 2 chicken roll + dessert(2 gulab jaman)");
  } else if (budget > 500 && budget <= 1000) {
    console.log("Order 1 large pizza + dessert(4 gulab jaman + jalebi)");
  } else if (budget > 1000 && budget <= 1500) {
    console.log("Order 3  zinger burgers + 3 fries + dessert(3 pastries)");
  } else {
    console.log(
      "Premium package: Order 2 large pizza + 3 large fries + dessert(three milk cake)"
    );
  }
} else {
  console.log("Aapke dijjjkljjlje liye koi special deal nahi hai.");
}
