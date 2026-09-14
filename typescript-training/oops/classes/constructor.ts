// Creating Employee Class
class Employee {

    // properties / data 
    empId: number = 1234;
    empName: string = "John Doe";
    empProject: string = "Project X";

    //methods
    empAddress(): void {
        console.log("123 Main St, City, Country");
    }

    //constructor
    constructor(){
        console.log("Employee object created, And constructor method is called");
    }

}

//Accessing the data from the class
let obj = new Employee(); // new + className() //Employee() is a constructor
console.log(obj.empId);
obj.empAddress();

// A constructor is a default method that will be called every time we are going to create an object. 

//There are two different types of constructors. 

//1. Default constructor : The constructor created by default without any parameters 
//2. Parameterized constructor : The constructor created by the user with some parameters 