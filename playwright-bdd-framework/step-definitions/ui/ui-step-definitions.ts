import { Given, When, Then } from '@cucumber/cucumber';
import { cookiesPage, loginPage, homePage } from '../../support/hooks.ts';

//Given Launch the Createio CRM application
Given('Launch the Createio CRM application', async () => {
    await loginPage.launchApplication();
})

//Then Cookies page should be displayed
Then('Cookies page should be displayed', async () => {
    await cookiesPage.verifyCookiesPopupIsDisplayed();
})

//And Cookies pop-up content should be displayed as below
Then('Cookies pop-up content should be displayed as below', async (expectedContent: string) => {
    await cookiesPage.verifyCookiesPopupContent(expectedContent);
})

//And Verify Cookies pop-up logos
Then('Verify Cookies pop-up logos', async () => {
    await cookiesPage.verifyCookiesPopupLogos();
})

//And Verify Cookies pop-up switch buttons
Then('Verify Cookies pop-up switch buttons', async () => {
    await cookiesPage.verifyCookiesPopupSwitchButtons();
})

//And Verify Cookies pop-up selection buttons
Then('Verify Cookies pop-up selection buttons', async () => {
    await cookiesPage.verifyCookiesPopupSelectionButtons();
})

//And Verify show details link is displayed
Then('Verify show details link is displayed', async () => {
    await cookiesPage.verifyShowDetailsLinkIsDisplayed();
})

//When User clicks on the show details link
When('User clicks on the show details link', async () => {
    await cookiesPage.clickShowDetailsLink();
})

//Then Cookies pop-up should be displayed in expanded view
Then('Cookies pop-up should be displayed in expanded view', async () => {
    await cookiesPage.verifyCookiesPopupExpandedViewIsDisplayed();
})

// When User clicks on the "allow all" button
When('User clicks on the {string} button', async (buttonName: string) => {
    await cookiesPage.clickOnSelectionButton(buttonName);
})

//Then Cookies pop-up should be closed
Then('Cookies pop-up should be closed', async () => {
    await cookiesPage.verifyCookiesPopupIsClosed();
})

//And Login page should be displayed
Then('Login page should be displayed', async () => {
    await loginPage.verifyLoginPageIsDisplayed();
})

//When User enters "<username>" and "<password>"
When('User enters {string} and {string}', async (username: string, password: string) => {
    await loginPage.enterCredentials(username, password);
})

//And User clicks on the login button
When('User clicks on the login button', async () => {
    await loginPage.clickLoginButton();
})

//Then Login should be "<result>"
Then('Login should be {string}', async (result: string) => {
    if(result === 'success') {
        await loginPage.verifyLoginSuccessMessageIsDisplayed();
    } else{
        await loginPage.verifyLoginErrorMessageIsDisplayed();
    }
})

//When User enters username "bharattechacademy5@outlook.com"
When('User enters username {string}', async (username: string) => {
    await loginPage.enterCredentials(username, '');
})

//And Click on the forgot Password link
When('Click on the forgot Password link', async () => {
    await loginPage.clickForgotPasswordLink();
})

//Then Forgot password confirmation message should be displayed
Then('Forgot password confirmation message should be displayed', async () => {
    await loginPage.verifyForgotPasswordConfirmationMessageIsDisplayed();
})

//Then Social media login options should be available
Then('Social media login options should be available', async () => {
    await loginPage.verifySocialMediaLoginOptionsAreAvailable();
})