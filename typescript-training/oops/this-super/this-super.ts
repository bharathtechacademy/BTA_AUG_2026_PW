//this =>This refers to the current class instance.
//super =>This refers to the parent class instance.

class Parent {
    name: string = "Bharath";

    ptintAge(){
        console.log(30);
    }
}



class Child extends Parent {

    name: string = "Sarath";

     ptintAge(){
        console.log(40);
    }

    printDetails(name: string): void {
        console.log(name);
        console.log(this.name);
        console.log(super.name);//By using the `super` keyword, we cannot access a parent class property exclusively in TypeScript. 
        this.ptintAge();
        super.ptintAge();
    }

}

let obj = new Child();
obj.printDetails("Sivaji");