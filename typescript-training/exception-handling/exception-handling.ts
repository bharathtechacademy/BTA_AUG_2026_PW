// Exception : An exception is all about the error that occurred during the execution of your program. 

// Exception Handling : Exception handling is all about handling / controlling the exceptions. 

//Generally, in TypeScript, we can control the exceptions in two different ways. 

//1. When there is an exception, I want to ignore it and proceed further. => try-catch block
//2. When there is no exception, I want to create one by myself. => throw statement


//Syntax of try-catch block 

try {
    // original code
} catch (abc) {
    // alternate code to be executed when original code throws an exception
}

// Example:


//Before Exception Handling
// let input: any;
// console.log(input.toUpperCase());
// console.log("Execution completed successfully. ")

//After exception handling 

// let input: any;
// try {
//     console.log(input.toUpperCase());
// } catch (abc) {
//     console.log("Exception details: ", abc);
//     console.log("Original code failed, so currently I am executing alternate code.")
//     console.log(input.toLowerCase());
// } finally {
//     console.log("I am finally blocking code. I will execute always. ");
// }
// console.log("Execution completed successfully. ")


//throw an custom exception

//Syntax : throw new Error("Error message to be displayed");

let age : number = 17;

if(age < 18){
    throw new Error("You are not eligible to vote.");
}else{
    console.log("You are eligible to vote.");
}

console.log("Execution completed.");