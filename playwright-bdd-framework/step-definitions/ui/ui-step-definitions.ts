import { Given, When, Then } from '@cucumber/cucumber';
import { cookiesPage, loginPage, homePage } from '../../support/hooks.ts';

//Given Launch the Createio CRM application
Given('Launch the Createio CRM application', async() =>{
    await loginPage.launchApplication();
})

//Then Cookies page should be displayed
Then('Cookies page should be displayed',async() =>{
    await cookiesPage.verifyCookiesPopupIsDisplayed();
})

//And Cookies pop-up content should be displayed as below
Then('Cookies pop-up content should be displayed as below', async(expectedContent :string) =>{
    await cookiesPage.verifyCookiesPopupContent(expectedContent);
})

//And Verify Cookies pop-up logos
Then('Verify Cookies pop-up logos', async()=>{
    await cookiesPage.verifyCookiesPopupLogos();
})

//And Verify Cookies pop-up switch buttons
Then('Verify Cookies pop-up switch buttons', async()=>{
    await cookiesPage.verifyCookiesPopupSwitchButtons();
})