class Parent1 {

    name: string = "Bharath Reddy";
    age: number = 30;
    city: string = "Hyderabad";

    printData() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`City: ${this.city}`);
    }

}

class Parent2 {

    state: string = "Telangana";
    country: string = "India";

    printData() {
        console.log(`State: ${this.state}`);
        console.log(`Country: ${this.country}`);
    }

}

//Multiple inheritance (In TypeScript, this is not allowed. )
class Child extends Parent1, Parent2{ // child  extends  parent

  
    //Print all the values from class 1 and class 2 together. 
    printData() {
        // let parent = new Parent();
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
        console.log(this.state);
        console.log(this.country);
    }

}