console.log("Execution Started");
console.log("Step 1 Executed");
console.log("Step 2 Executed");
console.log("Step 3 Executed");
console.log("Step 4 Executed");
setTimeout(() => {
    console.log(getSumOfSerialNumbers(10000000000));
}, 5000);
// console.log(getSumOfSerialNumbers(10000000000));
console.log("Step 6 Executed");
console.log("Step 7 Executed");
console.log("Step 8 Executed");
console.log("Step 9 Executed");
console.log("Execution Finished");

//Function to get the sum of numbers from 1 to the given input number 
function getSumOfSerialNumbers(n:number):number{
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum += i;
    }
    return sum;
}