//Access modifiers in TypeScript 

//Access modifiers are nothing but a set of keywords used to control the access of class properties (data /methods/objects) in TypeScript.

//There are three types of access modifiers available in TypeScript:

//1. public: The property/method is accessible from anywhere.
//2. protected: The property/method is accessible within the class and its subclasses.
//3. private: The property/method is accessible only within the class itself.

//1. public / no access modifier
// public access modifier is the default access modifier in TypeScript. 
// Public data can be accessed within the class. 
// Public data can also be accessed within the child class. 
// Public data can be accessed outside of the class as well. 


//2. protected
// Protected data can be accessed within the class. 
// Protected data can also be accessed within the child class. 
// Protected data cannot be accessed outside of the class. 

//3. private
// Private data can be accessed within the class. it's like a secret to the outside world.
// Private data cannot be accessed within the child class. 
// Private data cannot be accessed outside of the class. 


class Class1 {

    private name: string = "Bharath Reddy";
    private age: number = 30;
    private city: string = "Hyderabad";

    private printData() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`City: ${this.city}`);
    }

    public getAge(): number {
        return this.age;
    }

    public setNewAge(age: number): void {
        this.age = age;
    }

}

class Class2 extends Class1 {

    //Method to Access the data from class 1. 
    printData() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`City: ${this.city}`);
    }


}

class Class3 {

    printData() {
        let obj = new Class1();
        // console.log(`Name: ${obj.name}`);
        // console.log(`Age: ${obj.age}`);
        // console.log(`City: ${obj.city}`);
        console.log(obj.getAge());
        obj.setNewAge(35);
        console.log(obj.getAge());
    }
}
