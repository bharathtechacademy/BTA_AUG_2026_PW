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

// Function => A function is a block of code or a collection of statements written together to complete a specific task. 

//Function with parameters (The function having some dynamic data or code written inside )
function login(browserName : string, username: string, password: string) :void {
    console.log(`Launch the ${browserName} Browser`);
    console.log("Enter the URL: https://www.icici.com/");
    console.log(`Enter the username as '${username}' and password as '${password}'`);
    console.log("Click on the login button");
}

//Function without parameters (The function having some static data or code written inside )
function logoutAndCloseBrowser() :void {
    console.log("Logout from the application");
    console.log("Close the browser");
}

//Function with return type 
function getAccountBalance() : number {
    console.log("Navigate to the account balance page");
    let accountBalance : number = 100000; //local variable
    return accountBalance; //It will copy the local variable value and store it inside the function name. 
}


//Below 3 data types from ES6 are also non-primitive data types.

//Set => Set is a collection of unique values. 
//Map => Map is a collection of key-value pairs.
//Date => Date is a data type that can store the date and time values.

//Set => Set is a collection of unique values. 
let empIds : Set <number> = new Set();
empIds.add(1234);
empIds.add(1235);
empIds.add(1236);
empIds.add(1234); //Duplicate value will not be added to the set.
console.log(empIds);

//Map => Map is a collection of key-value pairs.
// Map won't allow duplicate keys, but it will allow duplicate values. 
let empDetails : Map  <string, string | number | boolean> = new Map();
empDetails.set("name", "Bharath");
empDetails.set("id", 1234);
empDetails.set("visaStatus", true);
empDetails.set("name", "Prakash"); //Duplicate key will not be added to the map. It will update the value of the existing key.
empDetails.set("pin", 1234); //Duplicate key will not be added to the map. It will update the value of the existing key.
console.log(empDetails);

//Date => Date is a data type that can store the date and time values.
let date = new Date();
console.log(date);

//current date
let currentDate = date.getDate();
console.log(currentDate);

//current month
let currentMonth = date.getMonth() + 1; //Months are zero-based
console.log(currentMonth);

//current year
let currentYear = date.getFullYear();
console.log(currentYear);

//current hours
let currentHours = date.getHours();
console.log(currentHours);

//current minutes
let currentMinutes = date.getMinutes();
console.log(currentMinutes);

//current seconds
let currentSeconds = date.getSeconds();
console.log(currentSeconds);

//current day of the week
let currentDay = date.getDay(); 
console.log(currentDay); //0 => Sunday, 1 => Monday, 2 => Tuesday, 3 => Wednesday, 4 => Thursday, 5 => Friday, 6 => Saturday

