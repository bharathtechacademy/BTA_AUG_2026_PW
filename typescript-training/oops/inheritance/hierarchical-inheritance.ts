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

//Hierarchical inheritance: Multiple child classes inherit from a single parent class.
class Child1 extends Parent{ // child  extends  parent

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

//Child2 class inheriting from Parent class
class Child2 extends Parent{ // child  extends  parent

    state: string = "Andrapradesh";

    //Print all the values from class 1 and class 2 together. 
    printData() {
        // let parent = new Parent();
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
        console.log(this.state);
    }

}