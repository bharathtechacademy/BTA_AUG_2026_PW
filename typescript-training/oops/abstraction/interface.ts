//Interface is a special abstract class. The specialty of this interface is that it will accept onlyabstract methods. 

interface CommonMethods1 {

    loginIntoApplication(): void;

    logoutFromApplication(): void;

}

interface CommonMethods2 {

    loginIntoApplication(): void;

    searchForItem(): number;

}

class Test implements CommonMethods1, CommonMethods2{

    loginIntoApplication(): void {
        console.log("Logging into the application.");
    }

    logoutFromApplication(): void {
        console.log("Logging out from the application.");
    }

    navigateToHomePage(): void {
        console.log("Navigating to the home page.");
    }

    searchForItem(): number {
        console.log("Searching for an item.");
        return 1;
    }
}