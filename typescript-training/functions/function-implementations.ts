//Function Implementations 

//Function : Block of code or collection of statements written together inside the block to complete a specific task 

//There are multiple ways we can implement functions to complete the specific task. 

//1. Functions without parameters and without any return type 
function printName() :void {
    console.log("My name is Bharath Reddy");
}

//calling function
printName();

//2. Functions with parameters and without any return type
function printMyName(name:string) :void {
    console.log(`My name is ${name}`);
}

//calling function
printMyName("Bharath Reddy");
printMyName("Archana");

//3. Functions with parameters and with return type
function sumOfTwoNumbers(num1:number, num2:number) :number {
    let sum : number =  num1 + num2;  //returning the sum of two numbers
    return sum;
}

//calling function
let sum = sumOfTwoNumbers(10, 20);
console.log(`The sum of two numbers is : ${sum}`);

//4. Functions without parameters and with return type
function getCurrentYear() :number {
    let currentYear : number = new Date().getFullYear();
    return currentYear;
}

//calling function
let currentYear = getCurrentYear();
console.log(`The current year is : ${currentYear}`);

//5. Functions with optional parameters 
function employeeDetails(empId:number, empName?:string, empAge?:number){
    console.log(empId);
    console.log(empName);
    if(empAge){
        console.log(empAge);
    }    
}

//calling function
employeeDetails(1234, "Bharath Reddy", 36 );
employeeDetails(1235, "Ravi");

//6. Function with default parameters. 
function personInfo(name :string, empId : number=122 , empVisaStatus:boolean=false){
    console.log(empId);
    console.log(name);
    console.log(empVisaStatus);
}

//calling function
personInfo("Bharath",1234,true);
personInfo("Ravi",1235); 

//7. Function with rest parameters.
function sumOfNumbers(...numbers:number[]) :number {
    let sum : number = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

//calling function
console.log(sumOfNumbers(1,2,3)); //(1,2,3) => [1,2,3]