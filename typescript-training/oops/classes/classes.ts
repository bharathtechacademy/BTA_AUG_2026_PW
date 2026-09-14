// Creating employee class 

//Inside the class, TypeScript is not going to allow declarations like `let` or `const`. 
//Inside the class, TypeScript is not going to allow the keyword `function` also. 

//Difference between method and function 

// method is a Block of code that is defined inside the class 
// A function is a block of code that is defined outside of the class. 

function employee(): string {
    return "Bharath Reddy";
}

class Employee {

    // properties / data 
    empId: number = 1234;
    empName: string = "John Doe";
    empProject: string = "Project X";

    //methods
    empAddress(): void {
        console.log("123 Main St, City, Country");
    }

}

//Access the data from the class. => using Object (An object is nothing but a new instance of the class. )
let obj = new Employee();
console.log(obj.empId);
console.log(obj.empProject);
obj.empAddress();

