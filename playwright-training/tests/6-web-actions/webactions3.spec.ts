import { test, expect } from '@playwright/test';

test('Handling window alerts in Playwright ', async ({ page }) => {

// 1. Enter URL and Launch the application (https://demoqa.com/alerts)
await page.goto('https://demoqa.com/alerts');

// 2. Wait for Page-load
const alertsPageHeader = await page.locator('//h1[text()="Alerts"]');
await expect(alertsPageHeader).toBeVisible();

// 3. Locate alert buttons
const informationAlertButton = await page.locator('//button[@id="alertButton"]');
const confirmationAlertButton = await page.locator('//button[@id="confirmButton"]');
const promptAlertButton = await page.locator('//button[@id="promtButton"]');

// Suppose if an alert displays, Copy the message from the alert and also click on the OK button. 
await page.once('dialog' , async dialog => {

    //Print the alert message in the console. 
    console.log(await dialog.message());

    //Click on the OK button in the alert. 
    await dialog.accept();
})

// trigger the alert 
await informationAlertButton.click();

// Suppose if an alert displays, Copy the message from the alert and also click on the CANCEL button. 
await page.once('dialog' , async dialog => {

    //Print the alert message in the console. 
    console.log(await dialog.message());

    //Click on the CANCEL button in the alert. 
    await dialog.dismiss();
})

// trigger the alert 
await confirmationAlertButton.click();

// Suppose if an alert displays, Copy the message from the alert and also type the text and click on the 'OK' button
await page.once('dialog' , async dialog => {

    //Print the alert message in the console. 
    console.log(await dialog.message());

    //Click on the CANCEL button in the alert. 
    await dialog.accept("Playwright");
})

// trigger the alert 
await promptAlertButton.click();

//Take a screenshot of the page at the end of the execution. 
await page.screenshot({path: 'screenshots/alerts.png' , fullPage:true});

});