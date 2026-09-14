//Class with multiple methods related to employee 


//Before Parameterized constructor
// class Employee {

//     //method 1
//     printEmployeeDetails(empId: number, empName: string) {
//         console.log("Employee Id: " + empId);
//         console.log("Employee Name: " + empName);
//     }

//     //method 2
//     printEmployeeProjects(empId: number, empProject: string) {
//         console.log("Employee Id: " + empId);
//         console.log("Employee Projects: " + empProject);
//     }

//     //method 3
//     printEmployeeRole(empId: number, empRole: string) {
//         console.log("Employee Id: " + empId);
//         console.log("Employee Role: " + empRole);
//     }
// }

// //Access the methods  by creating an object of the Employee class. 
// let obj = new Employee();

// obj.printEmployeeDetails(1234 , "Bharath Reddy");
// obj.printEmployeeProjects(1234 , "Amazon");
// obj.printEmployeeRole(1234 , "QA");





class Employee {

    empId: number = 0;  // this refers current class instance 

    constructor(id: number) {
        this.empId = id;
    }

    //method 1
    printEmployeeDetails(empName: string) {
        console.log("Employee Id: " + this.empId);
        console.log("Employee Name: " + empName);
    }

    //method 2
    printEmployeeProjects(empProject: string) {
        console.log("Employee Id: " + this.empId);
        console.log("Employee Projects: " + empProject);
    }

    //method 3
    printEmployeeRole(empRole: string) {
        console.log("Employee Id: " + this.empId);
        console.log("Employee Role: " + empRole);
    }
}

//Access the methods  by creating an object of the Employee class. 
let obj = new Employee(1234); 

obj.printEmployeeDetails("Bharath Reddy");
obj.printEmployeeProjects("Amazon");
obj.printEmployeeRole("QA");