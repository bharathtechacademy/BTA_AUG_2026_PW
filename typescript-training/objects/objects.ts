//object => Object data type represents a collection of key-value pairs stored together. 


//1. Storing data inside the object 
console.log("1. Storing data inside the object");
interface empDetails {
    "empName": string,
    "empId": number,
    "visaStatus"?: boolean,
    "date": string,
    "salary"?: number,
    "course"?: string[],
    "role"?: string,
    "address": {
        "street": string,
        "city": string,
        "state": string,
        "country"?: string
    }
}

let empData: empDetails = {
    "empName": "Bharath",
    "empId": 1234,
    "visaStatus": true,
    "date": "2024-06-16",
    "address": {
        "street": "123 Main St",
        "city": "Hyderabad",
        "state": "Telangana"
    }
}

//2. Accessing data from the object
console.log("2. Accessing data from the object");
console.log(empData.empName);
console.log(empData.address.city);

console.log(empData["empName"]);
console.log(empData["address"]["city"]);

//3. Adding additional properties to the existing object 
console.log("3. Adding additional properties to the existing object");
empData.salary = 200000;
empData.address.country = "India";
empData.course = ["TypeScript", "JavaScript", "NodeJS"];
console.log(empData);

//4. Update the existing property within the existing object. 
console.log("4. Update the existing property within the existing object");
empData.salary = 250000;
empData.address.city = "Bangalore";
console.log(empData);

//5. Delete the existing property within the object. 
console.log("5. Delete the existing property within the object.");
delete empData.salary;
delete empData.visaStatus;
console.log(empData);

//6.Check if the property exists inside the object. 
console.log("6.Check if the property exists inside the object.");
console.log("empName" in empData);
console.log("salary" in empData);

//7. Get all the keys from the object. 
console.log("7. Get all the keys from the object.");
console.log(Object.keys(empData)); //It will return the keys in the form of Array

//8. Get all the values from the object.
console.log("8. Get all the values from the object.");
console.log(Object.values(empData)); //It will return the values in the form of Array

//9. Get all the entries from the object.
console.log("9. Get all the entries from the object.");
console.log(Object.entries(empData)); //It will return the key-value pairs in the form of Array

//10. Iterate all the values of the object by using a for-in loop. 
console.log("10. Iterate all the values of the object by using a for-in loop.");
for (let key in empData) {
    if (typeof empData[key as keyof empData] === "object") {
        for (let innerKey in empData[key]) {
            console.log(empData[key][innerKey]);
        }
    } else {
        console.log(empData[key as keyof typeof empData]);
    }
}

//11. Verify the data type of the property within the object. 
console.log("11. Verify the data type of the property within the object.");
console.log(typeof empData.empName);
console.log(typeof empData.address);

//12. Merge two objects together and combine it as another object. 
console.log("12. Merge two objects together and combine it as another object.");
interface empProjectDetails {
    "projectName": string,
    "teamSize": number
}

let empProjectData: empProjectDetails = {
    "projectName": "TypeScript Training",
    "teamSize": 5
}

let mergedData = { ...empData, ...empProjectData };
console.log(mergedData);
mergedData.role = "QA Engineer";
console.log(mergedData);