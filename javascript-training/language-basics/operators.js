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

