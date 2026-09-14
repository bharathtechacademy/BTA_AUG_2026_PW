//Abstraction is a concept of hiding the implementation.

//method
//A method is nothing but a block of code or a collection of statements written together to complete a specific task. 

abstract class CommonMethods {

    abstract loginIntoApplication(): void;

    logoutFromApplication(): void {
        console.log("Click on the logout button. ")
        console.log("Verify logout is successful. ")
    }

}



class Test extends CommonMethods {

    loginIntoApplication(): void {
        console.log("Launch the application. ")
        console.log("Enter credentials. ")
        console.log("Click on the login button.")
    }

}




// let obj = new CommonMethods();