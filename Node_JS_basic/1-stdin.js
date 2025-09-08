// Display message
console.log("Welcome to Holberton School, what is your name?");

// User imput
process.stdin.on("data", data => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
})

// Program exit message
process.stdin.on("end", () => {
  console.log("This important software is now closing");
});