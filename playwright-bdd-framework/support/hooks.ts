import { setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import { BeforeAll, AfterAll, Before, After } from '@cucumber/cucumber';

import { CookiesPageSteps } from '../page-objects/page-steps/cookies-page-steps.ts';
import { LoginPageSteps } from '../page-objects/page-steps/login-page-steps.ts';
import { HomePageSteps } from '../page-objects/page-steps/home-page-steps.ts';


//Declare variables to store browser, browser context, and page details. 
let browser: Browser;
let context: BrowserContext;
let page: Page;


export let cookiesPage: CookiesPageSteps;
export let loginPage: LoginPageSteps;
export let homePage: HomePageSteps;

setDefaultTimeout(90 * 1000); // Set default timeout to 90 seconds

//Method to launch the browser engine once before executing all the scenarios 
BeforeAll(async () => {
    browser = await chromium.launch({ headless: false });
});

//Method to create a browser session and also initialize the page objects before each and every scenario 
Before(async () => {
    context = await browser.newContext();
    page = await context.newPage();
    cookiesPage = new CookiesPageSteps(page);
    loginPage = new LoginPageSteps(page);
    homePage = new HomePageSteps(page);
});

//Method to close the browser and capture the screenshots for failure test scripts. 
After(async (scenario) =>{
    if(scenario.result?.status === 'FAILED'){
        await page.screenshot({path : `./report/screenshots/${scenario.pickle.name.replace(/[^a-zA-Z]/g, '')}.png`})
    }
    await context.close(); // Close the browser context after each scenario
})

//Method to close the browser engine once after executing all the scenarios 
AfterAll(async () => {
    await browser.close();
});
