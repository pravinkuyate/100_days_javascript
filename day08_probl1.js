const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your age: ", function(age) {
  switch(parseInt(age)) {
    case 1:
      console.log("Your age is 1");
      break;
    case 2:
      console.log("Your age is 2");
      break;
    case 3:
      console.log("Your age is 3");
      break;
    default:
      console.log("Your age is " + age);
  }

  rl.close();
});


