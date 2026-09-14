export class Person {

    //data members
    static name : string = "Bharath Reddy";
    static age : number = 30;
    city : string = "Hyderabad";

    //methods
    static printData1(){
        console.log(Person.name);
    }

    printData2(){
        console.log(Person.age);
        console.log(this.city);
    }


}

class Person1 {

    //data members
    static name : string = "Bharath Reddy";
    age : number = 30;
    city : string = "Hyderabad";

    //methods
    static printData1(){
        console.log(Person.name);
    }

    printData2(){
        console.log(this.age);
        console.log(this.city);
    }


}

class Person2 {

    //data members
    static name : string = "Bharath Reddy";
    age : number = 30;
    city : string = "Hyderabad";

    //methods
    static printData1(){
        console.log(Person.name);
    }

    printData2(){
        console.log(this.age);
        console.log(this.city);
    }


}

let obj = new Person();
console.log(Person.name);
Person.printData1();
obj.printData2();