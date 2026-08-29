// Conditional Statements => The statements written along with conditions on top of it 
// Whenever we want to add some conditions to execute the program, we are going to use conditional statements.

// Statement meaning line of code.

//condition(){

// line 1 
// line 2
// line 3

//}

// There are two different types of conditional statements available in TypeScript. 

//1. if-else statement => When we don't know the result of the condition before itself 
//2. switch-case Statement => When we know the result and we want to choose one option among multiple options available 


//1. If-Else Statement 

//Syntax : 

// if(condition 1){
//     //code to be executed if condition 1 is true
// } else if(condition 2){
//     //code to be executed if condition 2 is true
// } else if(condition 3)  {
//     //code to be executed if condition 3 is true
// } else{
//     //default code to be executed if all conditions are false
// }

// Nested if-else conditional statement.

// if(condition 1){

// if(condition){
//     //code to execute
// }else{
//}
// } else if(condition 2){
//     //code to be executed if condition 2 is true
// } else if(condition 3)  {
//     //code to be executed if condition 3 is true
// } else{
//     //default code to be executed if all conditions are false
// }

// Example of If-False Conditional Statements 

let percentage: number = 94.5;

if (percentage >= 90) {
    console.log("Grade A");

    if (percentage >= 95) {
        console.log("Congrats ..!You will get gold medal");
    } else {
        console.log("You will get silver medal");
    }

} else if (percentage >= 80) {
    console.log("Grade B");
} else if (percentage >= 70) {
    console.log("Grade C");
} else if (percentage >= 40) {
    console.log("Grade D");
} else {
    console.log("Fail");
}

console.log("End of the program");

//2. Switch-Case Statement

//Syntax :

// switch(expression){
//     case value1:
//         //code to be executed if expression === value1
//         break; //break statement is used to terminate the switch-case statement once the case is matched and executed. If we don't use break statement, then all the cases after the matched case will be executed.
//     case value2:
//         //code to be executed if expression === value2
//         break;
//     case value3:
//         //code to be executed if expression === value3
//         break;

//     default:
//         //code to be executed if expression doesn't match any case
// }


// Example of Switch-Case Statement

let env: string = "qa";

switch (env) {
    case "dev":
        console.log("Development Environment");
        console.log("launch application with www.dev.amazon.com");
        break;

    case "qa":
        console.log("qa Environment");
        console.log("launch application with www.qa.amazon.com");
        break;

    case "prod":
        console.log("Production Environment");
        console.log("launch application with www.amazon.com");
        break;

    default:
        console.log("Invalid Environment");
    
}