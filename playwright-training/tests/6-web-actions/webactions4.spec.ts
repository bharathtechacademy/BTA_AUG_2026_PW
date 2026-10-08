import { test, expect } from '@playwright/test';

test('Handling Frames in Playwright ', async ({ page }) => {

// 1. Enter URL and Launch the application (https://demoqa.com/frames)
await page.goto('https://demoqa.com/frames');

// 2. Locate the main page element. 
const mainPageElement = await page.locator('//h1[text()="Frames"]');

// Locate the frame element
const frame = await page.frameLocator('//iframe[@id="frame1"]');

// 3. Locate the frame element. 
const frameElement = await frame.locator('//h1[@id="sampleHeading"]');

// 4. Copy and print the frame element text. 
console.log(await frameElement.textContent());

// 5. Copy and print the main page element text. 
console.log(await mainPageElement.textContent());

// Locate the frame2 element
const frame2 = await page.frameLocator('//iframe[@id="frame2"]');

// 6. Locate the frame2 element. 
const frame2Element = await frame.locator('//h1[@id="sampleHeading"]');

// 7. Copy and print the frame2 element text. 
console.log(await frame2Element.textContent());

});