import { test, expect } from '@playwright/test';

test('Handling new window in Playwright ', async ({ page }) => {

// 1. Enter URL and Launch the application (https://demoqa.com/browser-windows)
await page.goto('https://demoqa.com/browser-windows');

// 2. Locate the page header element. 
const pageHeader = await page.locator('//h1[text()="Browser Windows"]');
await expect(pageHeader).toBeVisible();

//3. Locate the new window button and click on the new window button. 
const newWindowButton = await page.locator('//button[@id="windowButton"]');
await newWindowButton.click();

//4. Wait until the new window is launched. 
await page.waitForEvent('popup');

//5. Collect all the windows launched currently. 
const allWindows = await page.context().pages();
console.log(allWindows.length);

//6. Store the new window in one of the variables. 
const newWindow = allWindows[1];

//7. Locate the new window element and print the text. 
const newWindowElement = await newWindow.locator('//h1[@id="sampleHeading"]');
console.log(await newWindowElement.textContent());

});