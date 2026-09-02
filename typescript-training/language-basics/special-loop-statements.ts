//Special for loops 


// //1. for...of loop => Iterate over each and every value of the array. 
// //2. for...in loop => It is used to iterate over the properties of an object.

// //Array of fruits
// let fruits : string [] = ["Apple", "Banana", "Mango", "Grapes"];

// //normal-for-loop
// for(let i:number = 0; i<fruits.length ; i++){ //fruits.length => The `length` method is going to calculate the total number of values available inside the array. 
//     console.log(fruits[i])
// }

// //for..of loop
// //syntax :
// // for(let value of array){
// //     console.log(value);
// // }

// for (let val of fruits){ // Get each value from the fruits array. As many values are available in the fruits array, those many times repeat the execution. 
//     console.log(val);
// }

// //2. for...in loop 

// //syntax :
// // for(let key in object){
// //     console.log(key);
// // }

// interface empDetails {
//     "empName": string,
//     "empId": number,
//     "visaStatus": boolean,
//     "date": string,
//     "address": {
//         "street": string,
//         "city": string,
//         "state": string
//     }
// }

// let empData : empDetails= {
//     "empName": "Bharath",
//     "empId": 1234,
//     "visaStatus": true,
//     "date":"2024-06-16",
//     "address": {
//         "street": "123 Main St",
//         "city": "Hyderabad",
//         "state": "Telangana"
//     }
// }

// //normal for loop (get each key from object)
// // for(let i:number = ) // For loop won't work for objects. 

// for( let key  in empData){
//     console.log(key);
//     console.log(empData[key as keyof empDetails]);
// }

// for( let key  in empData.address){
//     console.log(key);
//     console.log(empData.address[key as keyof empDetails["address"]]);
// }


// do-while loop => Do a loop that will execute a block of code at least once, even if your condition is not satisfied. 

let j: number = 0;
let pageLoaded: boolean = false;


//normal while loop
while (j > 0) {
    console.log(j + " Refresh the Page");
    j++;
}

//do-while loop
do {
    console.log(j + " Refresh the Page");
    j++;
} while (j > 0);