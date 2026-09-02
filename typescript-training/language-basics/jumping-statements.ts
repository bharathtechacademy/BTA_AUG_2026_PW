//Jumping Statements 

// Jumping statements are nothing but a set of keywords that we are going to use to jump from the current iteration to the next iteration. 

//There are mainly two different jumping statements we are going to use in loops. 

//1. break statement => Will be used to break the loop completely 
//2. continue statement => Will be used to skip the current iteration and jump to the next iteration of the loop 

for (let i:number = 1; i <=10 ; i++){

    if(i==5 || i==10){
        // break; //It will break the current loop. 
        continue; //It will skip the current iteration and move to the next iteration. 
    }
    console.log(i);
}



//return statement => Will be used to return a value from the function and exit the function.
//Function with return type 
function getAccountBalance() : number {
    console.log("Navigate to the account balance page");
    let accountBalance : number = 100000; //local variable
    return accountBalance; //It will copy the local variable value and store it inside the function name. 
    console.log(accountBalance); 
}