//using logical operators find 
//the person age lies between 10 and 2

/*let age=prompt("enter your age")

if(age>10 && age<20){
    console.log("your age is lies between 10 and 20")

}
else{
    console.log("age is not lies between1 10 and 20")

}
*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your age: ", function(age) {
  if (age > 10 && age < 20) {
    console.log("Your age is between 10 and 20.");
  } else {
    console.log("Your age is not between 10 and 20.");
  }

  rl.close();
});

//switch case statements

