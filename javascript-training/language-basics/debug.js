console.log("Executing Line 1");
console.log("Executing Line 2");
console.log("Executing Line 3");
sumOfNumbers(5, 10);
console.log("Executing Line 5");
console.log("Executing Line 6");
console.log("Executing Line 7");
console.log("Executing Line 8");
console.log("Executing Line 9");
console.log("Executing Line 10");




// Debugging the program step by step in VS Code. 

// 1. Add the break point ( Click on the line number where you want to manually execute the program. )
// 2. Run the program in debug mode. 



// Continue(F5) => Continue the auto-execution till the next breakpoint. 
// Stop(Shift + F5) => Stop the execution of the program.
// Restart(Ctrl + Shift + F5) => Restart the execution from the begining

// Step Over (F10) => Execute the current line and move to the next line. 
// Step Into (F11) => Go inside the step and check the internal code. 
// Step Out (Shift + F11) => Come out of the internal code and move to the next line. 











function sumOfNumbers(a, b) {
    let c = a + b;
    console.log(c);
}