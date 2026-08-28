//Syntax to store data:
//Declaration Variable : DATATYPE = Data ;

//In TypeScript, there are two different categories of data types. 

//1. Primitive Data Types
//2. Non-Primitive Data Types

/************************************/
/*******Primitive Datatypes**********/
/************************************/

//number  => The data type that can store numbers with decimals without decimals 
//number should be stored without any quotations. 
let num1: number = 10;
let num2: number = 10.25;

console.log(num1);
console.log(num2);

//string => The data type that can store a collection of characters is called a string. 
// string should be stored always with quotations. (single quotes/ double quotes / back ticks)

let firstName: string = "Prakash";
let lastName: string = 'Babu';
let role: string = "Senior 'Software' Engineer";

//Back ticks will be used to specify the dynamic string. 
let empInfo: string = `Employee first name is ${firstName}, employee last name is ${lastName}, and the employee role is ${role}.`;
console.log(empInfo);

//boolean => Boolean represents the result of a condition. (true or false)
let result : boolean = 10 > 5;
console.log(result);

//undefined => undefined represents a variable that has been declared but not assigned any value yet. 
let empAge : undefined;
console.log(empAge);

//null => null represents a variable that has been declared and assigned with null value.
let empSalary : null = null;
console.log(empSalary);

//union => Can represent more than one data type within the same variable 

let empAddress : string | number; 

empAddress = "Hyderabed";
empAddress = 500081 ;

//any => Any Datatype is allowed within the variable. (Basically, we are removing the Type Safety from the TypeScript. )

let empInformation : any;

empInformation = "Bharath";
empInformation = 1234;
empInformation = true ;

// ****************************************
// ******** Non-Primitive Datatypes********
// ****************************************

//object => Object data type represents a collection of key-value pairs stored together. 

interface empDetails {
    "empName": string,
    "empId": number,
    "visaStatus": boolean,
    "date": string,
    "address": {
        "street": string,
        "city": string,
        "state": string
    }
}

let empData : empDetails= {
    "empName": "Bharath",
    "empId": 1234,
    "visaStatus": true,
    "date":"2024-06-16",
    "address": {
        "street": "123 Main St",
        "city": "Hyderabad",
        "state": "Telangana"
    }
}

//Array => Array is a data type that can store a list of values. 
let fruits : string [] = ["Apple", "Banana", "Mango", "Grapes"];
let prices : number []= [200, 80, 100, 120];
let fruitsAndPrices : (string | number) []= ["Apple", 200, "Banana", 80, "Mango", 100, "Grapes", 120];

//accessing the data from the array
console.log(fruits[0]);
console.log(prices[1]);
console.log(fruitsAndPrices[3]);

//tuple : Tuple is an ordered array. 

// tuple vs normal array

//Problem Statement : Store employee name, employee ID, and visa status within the array. 

//Array 
let empInform : (string | number | boolean ) [] = [ "Bharath Reddy", 1234, true , "Hyderabad"] ;

//Tuple
let empTuple : [string , number , boolean] = [ "Bharath Reddy", 1234, true] ;