// Loop Statements in TypeScript

// Loop statements are nothing but a set of conditions that we are going to add along with the statements to execute the same code multiple times. 


let name: string = "Sundar";

//Before Loops
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);

//Loop statements are mainly divided into two different major categories. 

//1. for loop => When we know the total number of iterations to be executed before itself 
//2. while loop => When we don't know the total number of iterations to be executed before 

//1. for loop 

// Syntax of for loop
// for(condition-to-begin; condition-to-end; increment/decrement){
//     //code to be executed multiple times 

// }

//For loop to print the name 10 times 
// for (let i: number = 1; i <= 10; i++) {
//     console.log(i + " " + name);
// } 

//2. while loop

// Syntax of while loop

// while(condition-to-begin){
//     //code to be executed multiple times 
//     //condition-to-end
//     //increment/decrement
// }

let j: number = 1;
let pageLoaded: boolean = false;

while (j > 0) {

    //Break the loop either if a page is loaded successfully or already refreshed ten times. 
    if (pageLoaded || j > 10) {
        break;
    }

    console.log(j + " Refresh the Page");
    j++;
}