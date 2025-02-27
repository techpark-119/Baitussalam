let n = prompt("enter a number 1 to 10");

for (i = 1; i <= 10; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}

for (i = 1; i <= 100; i++) {
  if (i % 10 === 0 && i !== 50 && i !== 100) {
    console.log("Checkpoint!", i);
  } else if (i == 50) {
    console.log("Half way there");
  } else if (i == 100) {
    console.log("You Made it");
  }
}
console.log("All done");
