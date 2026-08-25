// Test Case 1: verify the home page.
console.log("******************TEST CASE 1: VERIFY THE HOME PAGE******************");
login("Edge", "Bharath", "Bharath@123");
console.log("Verify the home page is displayed or not");
logoutAndCloseBrowser();

// Test Case 2: verify the account balance
console.log("******************TEST CASE 2: VERIFY THE ACCOUNT BALANCE******************");
login("Chrome", "Bharath", "Bharath@123");
console.log("Verify the home page is displayed");
console.log("Verify the account balance is displayed as " + getAccountBalance());
logoutAndCloseBrowser();

// Test Case 3: verify the account statement
console.log("******************TEST CASE 3: VERIFY THE ACCOUNT STATEMENT******************");
login("Firefox", "Bharath", "Bharath@123");
console.log("Verify the home page is displayed");
console.log("Navigate to the account statement page");
console.log("Verify the account statement is displayed with the following details:");
logoutAndCloseBrowser();


//Steps to create functions. 

//1. Identify the duplicate code and separate the same from the program. 
//2. Copy the duplicate code and add it inside the block. 
//3. Add a unique name along with the 'function' keyword to each and every block. 

//Function with parameters (The function having some dynamic data or code written inside )
function login(browserName, username, password) {
    console.log(`Launch the ${browserName} Browser`);
    console.log("Enter the URL: https://www.icici.com/");
    console.log(`Enter the username as '${username}' and password as '${password}'`);
    console.log("Click on the login button");
}

//Function without parameters (The function having some static data or code written inside )
function logoutAndCloseBrowser() {
    console.log("Logout from the application");
    console.log("Close the browser");
}

//Function with return type 
function getAccountBalance() {
    console.log("Navigate to the account balance page");
    let accountBalance = 100000; //local variable
    return accountBalance; //It will copy the local variable value and store it inside the function name. 
}