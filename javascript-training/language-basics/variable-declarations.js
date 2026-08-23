// How to store data in JavaScript? 
// declaration variable = data ;

// Declaration is all about specifying the nature of the data in JavaScript. 

// In JavaScript, we can declare the variable by using three different keywords. 
// 1. var => 'var' can store variable data, that can be changed later (should not be used in modren JS)
// 2. let => 'let' also store variable data that can be changed later. 
// 3. const => 'const' can store constant data or fixed data that cannot be changed later. 


// Generally, these three different variable declarations are going to differ mainly based on four different parameters.

//1. Initialization 
//2. Reassignment 
//3. Re-declaration 
//4. Scope


//1. Initialization  => Adding the value at the time of declaration (Storing the data while creating the variable itself )
var a; //It is not mandatory to initialize the variable when we are using 'var'
let b; //It is not mandatory to initialize the variable when we are using 'let'
const c = 1234; //It is mandatory to initialize the variable when we are going to use a 'const'
a = 10;
b = 20;

//2. Reassignment  => Modifying the original value 
a = 100; // var allows reassignment
b = 200; // let allows reassignment
// c = 300; // const wont allow re-assignemnt

console.log(a);
console.log(b);
console.log(c);

//3. Re-declaration => Declare the same variable again to store different data. 
var a = "Bharath"; //var allows re-declaration
// let b = "ABCD"; //let wont allow re-declaration
// const c = "XYZ"; //const wont allow re-declaration
console.log(a);

//4. Scope => Where can we access the data?  block means {}

{

    let value1 = 100; // let is block scoped
    const value2 = 200; // const also block scoped
    var value3 = 300; // var is not block scoped

    console.log(value1);
    console.log(value2);
    console.log(value3);

}

// console.log(value1);
// console.log(value2);
console.log(value3);