//Regular Function:
function fi(){
let a ="pravin" 
console.log(a)

}

fi()


function great(name){
    return "hell0 "+ name + "!";
}


console.log(great("sarang"));


function sum(a,b){
return a+b  
}

console.log(sum(10,20));


//Arrow function 

//arrow function with single parameter

let square =x =>x*x*x;

console.log(square(3))

//
let multiply =(a,b) =>a*b;
console.log(5,56)

// without passing an argument

let he =() =>"hell12";

console.log(he())

//genrator function

function* countGen(){
let count=0
while(true){
    yield count++
}
}

let counter= countGen()
console.log(counter.next().value)
console.log(counter.next().value)
console.log(counter.next().value)
