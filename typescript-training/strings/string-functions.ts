// String : String is a data type that can store a collection of characters. 

//Whenever we want to store any value in the form of a string, we need to store it within the quotations. 
// Example:

// let firstName: string = "Prakash";
// let lastName: string = 'Babu';
// let role: string = "Senior 'Software' Engineer";
// console.log(firstName);
// console.log(lastName);
// console.log(role);
// let empInfo = `emp first name is ${firstName} , emp last name is ${lastName} and emp Role is ${role}`;
// console.log(empInfo);

//1. Storing a string inside the variable 
console.log("1. Storing a string inside the variable");
let originalString: string = " Username : Admin | Password : admin123 ";
console.log(originalString);

//2. Method to calculate the total number of characters available inside the string 
console.log("2. Method to calculate the total number of characters available inside the string");
let totalChars: number = originalString.length;
console.log(`Total number of characters available in the string are : ${totalChars}`)

//3. Method to get a specific character by using an index from the string 
console.log("3. Method to get a specific character by using an index from the string");
let charAt5thIndex: string = originalString.charAt(5);
console.log(`Character available at index 5 is : ${charAt5thIndex}`);

// reverse the string
let reverseString: string = "";
for (let i: number = originalString.length - 1; i >= 0; i--) {
    reverseString = reverseString + originalString.charAt(i);
}
console.log(`Reverse of string is : ${reverseString}`);

//4. Method to eliminate unwanted spaces from the string. (The space added at the beginning and the space added at the end )
console.log("4. Method to eliminate unwanted spaces from the string");
let trimmedString: string = originalString.trim();
console.log(`Original string was : '${originalString}'`);
console.log(`String after eliminating unwanted spaces is : '${trimmedString}'`);

//5. Method to eliminate all the spaces from the string.
console.log("5. Method to eliminate all the spaces from the string.");
let noSpacesString: string = originalString.replace(/ /g, ""); //replace (/old-char/g , new-char)
console.log(`Original string was : '${originalString}'`);
console.log(`String after eliminating all spaces is : '${noSpacesString}'`);

//6. Method to eliminate all the alphabets from the string.
console.log("6. Method to eliminate all the alphabets from the string.");
let noAlphabetString: string = originalString.replace(/[a-zA-Z]/g, "");
console.log(`Original string was : '${originalString}'`);
console.log(`String after eliminating all alphabets is : '${noAlphabetString}'`);

//7. Method to eliminate all the numbers from the string.
console.log("7. Method to eliminate all the numbers from the string.");
let noNumberString: string = originalString.replace(/[0-9]/g, "");
console.log(`Original string was : '${originalString}'`);
console.log(`String after eliminating all numbers is : '${noNumberString}'`);

//8. Method to eliminate all the special chars from the string.
console.log("8. Method to eliminate all the special chars from the string.");
let noSpecialCharsString: string = originalString.replace(/[^0-9a-zA-Z]/g, "");
console.log(`Original string was : '${originalString}'`);
console.log(`String after eliminating all special chars is : '${noSpecialCharsString}'`);

//9. Method to Convert all the characters of the string into uppercase. 
console.log("9. Method to Convert all the characters of the string into uppercase.");
let uppercaseString = originalString.toUpperCase();
console.log(`Uppercase string is : ${uppercaseString}`);

//10. Method to Convert all the characters of the string into lowercase. 
console.log("10. Method to Convert all the characters of the string into lowercase.");
let lowercaseString = originalString.toLowerCase();
console.log(`Lowercase string is : ${lowercaseString}`);

//11. Method to extract part of the string 
console.log("11. Method to extract part of the string.");
let username: string = originalString.substring(12, 17);
let password: string = originalString.substring(31, 39);
console.log(`Original string was : '${originalString}'`);
console.log(`Username : '${username}'`);
console.log(`Password : '${password}'`);

//12. Method to extract part of the string from dynamic string
console.log("12. Method to extract part of the string from dynamic string");
let splittedString: string[] = originalString.split(" ");
console.log(`Splitted string is : ${splittedString}`);
let dynamicUsername: string = splittedString[3]!;
let dynamicPassword: string = splittedString[7]!;
console.log(`Dynamic Username : '${dynamicUsername}'`);
console.log(`Dynamic Password : '${dynamicPassword}'`);

//13.Method to compare two different string values 
console.log("13. Method to compare two different string values.");
//== (loose equality) Comparison using double equals (checks value only)
//=== (strict equality) Comparison using triple equals (checks value and data type)
//includes() =>Method to check if a string contains a specific substring.
//startsWith() => Method to check if a string starts with a specific substring.
//endsWith() => Method to check if a string ends with a specific substring.

console.log(`Check Bharath Reddy contains 'Reddy' : ${"Bharath Reddy".includes("Reddy")}`);
console.log(`Check Bharath Reddy starts with 'Bharath' : ${"Bharath Reddy".startsWith("Bharath")}`);
console.log(`Check Bharath Reddy ends with 'Reddy' : ${"Bharath Reddy".endsWith("Reddy")}`);
console.log(`Check Bharath Reddy == 'Bharath Reddy' : ${"Bharath Reddy" == "Bharath Reddy"}`);
console.log(`Check Bharath Reddy === 'Bharath Reddy' : ${"Bharath Reddy".toUpperCase() === "bharath reddy".toUpperCase()}`);

//14. Method to convert string to other data types and vice versa. 
console.log("14. Method to convert string to other data types and vice versa. ");
let stdCode: number = 144;
let phone: number = 234567;
let std: string = String(stdCode);
console.log(std + phone);

let balance: string = " Account balance: $19999.99 ";
balance = balance.replace(/[^0-9.]/g, "");
let bal: number = parseFloat(balance);
console.log(bal >= 10000);