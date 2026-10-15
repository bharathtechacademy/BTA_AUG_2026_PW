import {test} from '@playwright/test';
import { LoginPageSteps } from '../../page-objects/page-steps/login-page-steps.ts';
import { CookiesPageSteps } from '../../page-objects/page-steps/cookies-page-steps.ts';
import {HomePageSteps } from '../../page-objects/page-steps/home-page-steps.ts';
import data from '../../testdata/ui/data.json' with {type: 'json'};


let cookiesPage: CookiesPageSteps;
let loginPage: LoginPageSteps;
let homePage: HomePageSteps;

test.describe('UI Tests', () => {

    //Initialize the page objects before each and every test case. 
    test.beforeEach(async ({ page }) => {
        cookiesPage = new CookiesPageSteps(page);
        loginPage = new LoginPageSteps(page);
        homePage = new HomePageSteps(page);
    });

    //Test Case 1: Verify the cookies pop-up is launched successfully. 
    test('Verify the cookies pop-up is launched successfully', async () => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopupIsDisplayed();
    });

    //Test Case 2: Verify cookies pop-up content. 
    test('Verify cookies pop-up content', async () => {
        const testdata = data["Verify cookies pop-up content"];
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopupIsDisplayed();
        await cookiesPage.verifyCookiesPopupContent(testdata.content);
    });

    //Test Case 3: Verify cookies pop-up logos. 
    test('Verify cookies pop-up logos', async () => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopupIsDisplayed();
        await cookiesPage.verifyCookiesPopupLogos();
    });

    //Test Case 4: Verify cookies pop-up switch buttons. 
    test('Verify cookies pop-up switch buttons', async () => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopupIsDisplayed();
        await cookiesPage.verifyCookiesPopupSwitchButtons();
    });

    //Test Case 5: Verify cookies pop-up selection buttons. 
    test('Verify cookies pop-up selection buttons', async () => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopupIsDisplayed();
        await cookiesPage.verifyCookiesPopupSelectionButtons();
    });

    //Test Case 6: Verify the Cookies pop-up shows the Details link. 
    test('Verify the Cookies pop-up shows the Details link', async () => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopupIsDisplayed();
        await cookiesPage.verifyShowDetailsLinkIsDisplayed();
        await cookiesPage.clickShowDetailsLink();
        await cookiesPage.verifyCookiesPopupExpandedViewIsDisplayed();
    });

    //Test Case 7: Verify the cookies pop-up is closed successfully after clicking on the selection button. 
    test('Verify the cookies pop-up is closed', async () => {
        const testdata = data["Verify the cookies pop-up is closed"];
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopupIsDisplayed();
        await cookiesPage.verifyCookiesPopupSelectionButtons();
        await cookiesPage.clickOnSelectionButton(testdata.button);
        await cookiesPage.verifyCookiesPopupIsClosed();
    });

    //Test Case 8: Verify login page is displayed. 
    test('Verify login page is displayed', async () => {
        const testdata = data["Verify login page is displayed"];
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopupIsDisplayed();
        await cookiesPage.verifyCookiesPopupSelectionButtons();
        await cookiesPage.clickOnSelectionButton(testdata.button);
        await cookiesPage.verifyCookiesPopupIsClosed();
        await loginPage.verifyLoginPageIsDisplayed();
    });

    //Test Case 9: Verify the login feature with invalid credentials. 
    test('Verify Invalid Login', async () => {
        const testdata = data["Verify Invalid Login"];
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopupIsDisplayed();
        await cookiesPage.verifyCookiesPopupSelectionButtons();
        await cookiesPage.clickOnSelectionButton(testdata.button);
        await cookiesPage.verifyCookiesPopupIsClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.enterCredentials(testdata.username, testdata.password);
        await loginPage.clickLoginButton();
        await loginPage.verifyLoginErrorMessageIsDisplayed();
    });

    //Test Case 10: Verify the login feature with valid credentials. 
    test('Verify Valid Login', async () => {
        const testdata = data["Verify Valid Login"];
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopupIsDisplayed();
        await cookiesPage.verifyCookiesPopupSelectionButtons();
        await cookiesPage.clickOnSelectionButton(testdata.button);
        await cookiesPage.verifyCookiesPopupIsClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.enterCredentials(testdata.username, testdata.password);
        await loginPage.clickLoginButton();
        await loginPage.verifyLoginSuccessMessageIsDisplayed();
    });

    //Test Case 11: Verify the forgot password feature. 
    test('Verify Forgot Password', async () => {
        const testdata = data["Verify Forgot Password"];
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopupIsDisplayed();
        await cookiesPage.verifyCookiesPopupSelectionButtons();
        await cookiesPage.clickOnSelectionButton(testdata.button);
        await cookiesPage.verifyCookiesPopupIsClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.enterCredentials(testdata.username);
        await loginPage.clickForgotPasswordLink();
        await loginPage.verifyForgotPasswordConfirmationMessageIsDisplayed();        
    });

    //Test Case 12: Verify social media login options. 
    test('Verify Social Media Login Options', async () => {
        const testdata = data["Verify Social Media Login Options"];
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopupIsDisplayed();
        await cookiesPage.verifyCookiesPopupSelectionButtons();
        await cookiesPage.clickOnSelectionButton(testdata.button);
        await cookiesPage.verifyCookiesPopupIsClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.verifySocialMediaLoginOptionsAreAvailable();
    });


});