import { Page } from "@playwright/test";
import { WebCommons } from "../../commons/ui/web-commons.ts";
import loginPageElements from "../page-elements/login-page-elements.json" with {type: "json"};

export class LoginPageSteps {

    page:Page;
    web: WebCommons;

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //Method to launch the application 
    async launchApplication(){
        await this.web.launchApplication();
    }

    //Verify the login pages displayed. 
    async verifyLoginPageIsDisplayed(){
        await this.web.isElementDisplayed(loginPageElements.loginPageHeader);
    }

    //Method to enter credentials 
    async enterCredentials(username: string, password?: string){
        await this.web.enterText(loginPageElements.businessEmailTextBox, username);
        if(password !== undefined){
            await this.web.enterText(loginPageElements.passwordTextBox, password);
        }
    }

    //Method to click on the login button 
    async clickLoginButton(){
        await this.web.click(loginPageElements.loginButton);
    }

    //Method to verify the forgot password link is available 
    async verifyForgotPasswordLinkIsAvailable(){
        await this.web.isElementDisplayed(loginPageElements.forgotPasswordLink);
    }

    //Method to verify social media login options available 
    async verifySocialMediaLoginOptionsAreAvailable(){
        await this.web.isElementDisplayed(loginPageElements.linkedInIcon);
        await this.web.isElementDisplayed(loginPageElements.googleIcon);
    }

    //Method to verify signup link is available 
    async verifySignupLinkIsAvailable(){
        await this.web.isElementDisplayed(loginPageElements.signUpLink);
    }

    //Method to click on the "Forgot Password" link 
    async clickForgotPasswordLink(){
        await this.web.click(loginPageElements.forgotPasswordLink);
    }

    //Method to verify forgot password confirmation message 
    async verifyForgotPasswordConfirmationMessageIsDisplayed(){
        await this.web.isElementDisplayed(loginPageElements.forgotPasswordConfirmationMsg);
    }

    //Method to verify login error message 
    async verifyLoginErrorMessageIsDisplayed(){
        await this.web.isElementDisplayed(loginPageElements.loginErrorMessage);
    }

    //Method to verify login success message 
    async verifyLoginSuccessMessageIsDisplayed(){
        await this.web.isElementDisplayed(loginPageElements.loginSuccessMessage);
    }

}