// Different types of functions in TypeScript 

// 1. Named Function
// 2. Anonymous Function
// 3. Arrow Function
// 4. Asynchronous Function
// 5. Callback Function


// 1. Named Functions : The functions declared explicitly with some name to call the same function later.

//Syntax : 
// function functionName(parameters: type): returnType {
//     // function body
// }

// Example :
function add(a: number, b: number): number {
    return a + b;
}

//calling the named function
console.log(add(5, 3));

//2. Anonymous Function : The function that we are going to create without any name 

// Syntax:
// const functionName = function(parameters: type): returnType {
//     // function body
// };

let sum = (a:number , b:number ) => (a+b) ;

let multiply = function (a:number, b:number): number {
    return a * b;
};


console.log( sum(1,2) );
console.log( multiply(3,4) );

//These anonymous functions will be used to provide a function as a parameter to another function. 

