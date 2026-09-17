// Polymorphism is a concept of having a single method with multiple implementations. 

// Polymorphism can be implemented in two different ways. 

//1. Compile-time polymorphism. (method overloading) (this is not allowed in typescript)
//2. Runtime polymorphism.  (method overriding) : Creating multiple methods between parent and child classes with the same parameters but different implementations 


class Parent {


    printEmpData(empName: string): void {
        console.log(`The employee name is ${empName}`);
    }

    //compile time polymorphism
    // printEmpData(empId: number): void {
    //     console.log(`The employee name is ${empId}`);
    // }

}

class child extends Parent {
    
    //runtime polymorphism (method overriding)
    printEmpData(empName: string): void {
        console.log(`Child class: The employee name is ${empName}`);
    }
}

let obj2 = new child();
obj2.printEmpData("Bharath");

