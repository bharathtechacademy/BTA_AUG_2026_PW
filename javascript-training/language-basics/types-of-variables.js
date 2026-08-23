//In JavaScript, variables are divided into two different categories. 

//1. Local variables  => The variable declared inside the block is called a local variable. 
//2. Global variables => The variables declared outside of the block are called global variables. 

let empName = "Bharath Reddy";

{
    let empAge = 35; //empAge is a local variable
    console.log(empAge); // 35
    console.log(empName); 
}

console.log(empName); 
console.log(empAge);