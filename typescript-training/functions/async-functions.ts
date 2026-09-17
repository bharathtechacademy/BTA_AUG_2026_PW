// Asynchronous Functions in TypeScript

// Asynchronous functions are all about the functions that will return a promise. 

// Normal function versus asynchronous function 

//Normal functions return the value directly. 
// Example of a normal function
function normalFunction(): string {
    return "I am a normal function";
}


//calling normal function
console.log(normalFunction());




// Asynchronous functions return a promise.Here, promise meaning a value that will be available in the future.
// Example of an asynchronous function
async function asyncFunction(): Promise<string> {
    return "I am an asynchronous function";
}

//calling asynchronous function
console.log(await asyncFunction());

// Problem statement : There is an internet banking application. Now I want to log in to the internet banking application, and I want to copy the account balance value and return that particular value to the user. 

// Normal function vs Asynchronus Function
function getAccountBalanceNormal(): number {
    // Simulating fetching account balance
    return 1000;
}


// 0 ==> 11 sec ==> 10400 

// new Promise (resolve , reject)

// if(bal >0 ){
 //   resolve(bal)
//}else{
    //reject("Sorry, account balance is not displayed. ")
    //}, 10000 ;

// Asynchronous function with promise (resolve)
async function getAccountBalanceAsync(): Promise<number> {
    // Simulating fetching account balance asynchronously
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1000);
        }, 10000);
    });
}

// Asynchronous function with promise (resolve => Fulfilling the promise and reject => Breaking the promise)
async function getAccountBalanceAsyncWithReject(): Promise<number> {
    // Simulating fetching account balance asynchronously
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5 && Math.random() !== null; // Simulate success or failure
            if (success) {
                resolve(1000);
            } else {
                reject("Failed to fetch account balance");
            }
        }, 30000);
    });
}

// Usage
console.log("Normal function balance:", getAccountBalanceNormal());
getAccountBalanceAsync().then(balance => console.log("Async function balance:", balance));