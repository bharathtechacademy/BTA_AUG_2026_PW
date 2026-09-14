class GrandParent {

    name: string = "Bharath Reddy";
    age: number = 30;
    city: string = "Hyderabad";

    printData() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`City: ${this.city}`);
    }

}

class Parent extends GrandParent {

    state: string = "Telangana";
    country: string = "India";

    printData() {
        console.log(`State: ${this.state}`);
        console.log(`Country: ${this.country}`);
    }

}

//Multi-level inheritance 
class Child extends Parent{ 

  
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