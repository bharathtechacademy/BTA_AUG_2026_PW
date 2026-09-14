//Inheritance in TypeScript 

//Inheritance in TypeScript is all about accessing the parent class properties in a child class without creating any object. 

//There are four different types of inheritance concepts available. 

//1. Single inheritance. => Child class extending one single parent class 
//2. Multiple inheritance 
//3. Multi-level inheritance 
//4. Hierarchical inheritance 

class Parent {

    name: string = "Bharath Reddy";
    age: number = 30;
    city: string = "Hyderabad";

    printData() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`City: ${this.city}`);
    }

}

//single inheritance
class Child extends Parent{ // child  extends  parent

    state: string = "Telangana";

    //Print all the values from class 1 and class 2 together. 
    printData() {
        // let parent = new Parent();
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
        console.log(this.state);
    }

}

//create object of child class
let obj = new Child();
obj.printData();
