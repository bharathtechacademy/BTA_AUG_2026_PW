import { test, expect } from '@playwright/test';

test('Handling new tab in Playwright ', async ({ page }) => {

// 1. Enter URL and Launch the application (https://demoqa.com/browser-windows)
await page.goto('https://demoqa.com/browser-windows');

// 2. Locate the page header element. 
const pageHeader = await page.locator('//h1[text()="Browser Windows"]');
await expect(pageHeader).toBeVisible();

//3. Locate the new tab button and click on the new window button. 
const newTabButton = await page.locator('//button[@id="tabButton"]');
await newTabButton.click();

//4. Wait until the new tab is launched. 
await page.waitForEvent('popup');

//5. Collect all the tabs launched currently. 
const allTabs = await page.context().pages();
console.log(allTabs.length);

//6. Store the new window in one of the variables. 
const newTab = allTabs[1];

//7. Locate the new window element and print the text. 
const newTabElement = await newTab.locator('//h1[@id="sampleHeading"]');
console.log(await newTabElement.textContent());

});