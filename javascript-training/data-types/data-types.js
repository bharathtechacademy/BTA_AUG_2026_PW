// Syntax to store the data in JavaScript 
// declaration variable = data ;

//Datatypes in JavaScript are divided into two different categories. 

//1. Primitive Data Types (Immutable data types ) (Can't change the original value. ) (number, string, boolean, undefined, null, symbol)
//2. Non-Primitive Data Types (Mutable data types ) (Can change the original value. ) (object, array, function, Set, Map)

// // Immutable
// let a = 10;
// a + 10;
// console.log(a);

// // Mutable 
// let empData = {
//     "name": "Bharath",
//     "id": 1234
// }
// empData.age = 35;
// console.log(empData);

/************************************/
/*******Primitive Datatypes**********/
/************************************/

//number  => The data type that can store numbers with decimals without decimals 
//number should be stored without any quotations. 
let num1 = 10;
let num2 = 10.25;

console.log(typeof num1);
console.log(typeof num2);

//string => The data type that can store a collection of characters is called a string. 
// string should be stored always with quotations. (single quotes/ double quotes / back ticks)

let firstName = "Prakash";
let lastName = 'Babu';

console.log(typeof firstName);
console.log(typeof lastName);

let role = "Senior 'Software' Engineer";
let role2 = 'Senior "Software" Engineer';

//Bad ticks will be used to specify the dynamic string. 
let empInfo = `Employee first name is ${firstName}, employee last name is ${lastName}, and the employee role is ${role}.`;
console.log(empInfo);

//boolean => Boolean represents the result of a condition. (true or false)
let result = 10 > 5;
console.log(result);
console.log(typeof result);

//undefined => undefined represents a variable that has been declared but not assigned any value yet. 
let empAge;
console.log(typeof empAge);

// null => null represents a variable that has been declared and assigned a null value intentionally. 
let salary = 100000;
salary = null;
console.log(salary);

console.log(empAge == salary);
console.log(empAge === salary);

//symbol :


/****************************************/
/*******Non-Primitive Datatypes**********/
/****************************************/

//Object => Object data type represents a collection of key-value pairs stored together. 

//let empName = "Bharath";
//let empId = 1234;
//let empVisaStatus = true;

let empData = {
    "name": "Bharath",
    "id": 1234,
    "visaStatus": true,
    "address": {
        "city": "Hyd",
        "state": "Telangana",
        "Zip": 500084
    }
};
console.log(empData);
console.log(empData.name);
console.log(empData["name"]);

console.log(empData.address.city);
console.log(empData["address"]["city"]);

//Array => Array is a data type that can store a list of values. 

//Before Array
let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Mango";
let fruit4 = "Grapes";

//After Array
let fruits = ["Apple","Banana","Mango","Grapes"];
let prices = [200, 80 , 100 , 160];
let fruitsAndPrices = ["Apple", 200, "Banana", 80, "Mango", 100, "Grapes", 160];
let fruitsArray= [["Apple", 200], ["Banana", 80], ["Mango", 100], ["Grapes", 160]]; //2D Array (Multiple arrays inside another array )

let fruitsObjects = [
    {"name": "Apple", "price": 200}, //0
    {"name": "Banana", "price": 80}, //1
    {"name": "Mango", "price": 100}, //2
    {"name": "Grapes", "price": 160} //3
];

console.log(fruitsObjects[3]);

console.log(fruits);
console.log(fruits[5]);

console.log(fruitsAndPrices[2]); //Banana
console.log(fruitsAndPrices[3]); //80

console.log(fruitsArray[0][0]); // Within the first array, first value  => Apple
console.log(fruitsArray[0][1]); // Within the first array, second value => 200


//function => Function is nothing but a block of code or a collection of statements written together to complete a specific task. 