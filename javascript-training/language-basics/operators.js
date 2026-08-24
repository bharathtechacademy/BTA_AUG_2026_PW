//Syntax to store the data in JavaScript 
// declaration variable = data ;

//Operator : Operators are nothing but a set of special characters used in JavaScript to perform different types of operations. 


//Based on the nature of the operation that we are going to complete, we can divide these operators into five different categories. 

//1. Arithmetic Operators
//2. Assignment Operators
//3. Comparison Operators
//4. Logical Operators
//5. Ternary Operator


//1. Arithmetic Operators => Arithmetic operators are a set of special characters used to perform mathematical operations. 
// +  => Addition
// -  => Subtraction
// *  => Multiplication
// /  => Division
// %  => Modulus
// ++ => Increment (+1 Increase the original value by one. )
// -- => Decrement (-1 Decrease the original value by one. )

let a = 10;
let b = 10;

// ++ always going to increase the value by one, -- always going to decrease the value by one, but the placement of ++ and -- will decide when to update. 

// If ++ written after variable, First execute the line.Next increase the value. (post-increment)
// If ++ written before variable, First increase the value, then execute the line. (pre-increment)

console.log(a++);

// console.log(--b);


//2. Assignment Operators => Assignment operators are a set of special characters used to assign values to variables.

//=
//+=
//-=
//*=
///=
//%=


let i = 10;
console.log (i);

i+=5; // i = i+5; // Increase the value by 5
console.log (i);//15

i-=5; // i= i-5 ; Decrease the value by 5
console.log (i);//10

i*=5; // i = i*5 ; Multiply the original value by 5. 
console.log (i); //50

i/=5; // i= i/5 ; Divide by 5. 
console.log (i);//10

i%=5;
console.log (i);//0

//3. Comparison Operators => Set of special characters used to compare two different values 
//== , === , > , <, >= , <= , != , !==
//== Represents loose equality, meaning compare only data. 
//=== Represents strict equality, meaning compare data along with data type. 


let x = 10;
let y = 10;
let z = "10"; //string (The number inside the quotations will represent text, not a number. )

console.log(x==z);
console.log(x===z);

console.log(x!=z);
console.log(x!==z);

console.log(x+y);
console.log(x+z);

//4. Logical Operators => Logical operators are all about a set of special characters used to combine two or more conditions. 
// && => Logical AND => Returns true if all conditions are true.
// || => Logical OR => Returns true if at least one condition is true.
// !  => Logical NOT

let p = 10;
let q = 20;
let r = 30;

console.log(p<q && q>r && p<r); // true and false  = false
console.log(p<q || q>r); // true or false = true
console.log(!(p<q || q>r)); // !(true or false) = !true = false

//5. Ternary Operator => Ternary operator is a special character used to perform conditional operations.
//Syntax : let result = (condition) ? value-if-true : value-if-false;

let age = 27;

let result = (age>18 || age ==18) ? "Eligible to Vote"  : "Not Eligible to Vote";

console.log(result);