//CSS Locator => Locating the element by using CSS properties of the element

//Syntax : await page.locator('css-selector')
//css-selector => The CSS selector of the element

//Advanced CSS Locators Examples

import { test, expect } from '@playwright/test';

test('CSS Locator example', async ({ page }) => {

    //Navigate to the Google home page. 
    await page.goto('https://www.google.com');

    //Locate the 'Google search' text box by using syntax 1. 
    await page.locator('textarea#ti6dpd');

    //Locate the 'Google search' text box by using syntax 2. 
    await page.locator('textarea.gLFyf');

    //Locate the 'Google search' text box by using syntax 3. 
    await page.locator('textarea[aria-label="Search"]');

    //Locate the "How search works" link by using syntax 3. 
    await page.locator('a[href="https://google.com/search/howsearchworks/?fg=1"]');

    //Locate the "How search works" link by using syntax 4. 
    await page.locator('a[href*="howsearchworks"]');

    //Locate the "How search works" link by using syntax 5. 
    await page.locator('a[href^="https://google.com/search/how"]');

    //Locate the "How search works" link by using syntax 6. 
    await page.locator('a[href$="searchworks/?fg=1"]');

    //Locate the 'Google search' text box by using syntax 7. 
    await page.locator('textarea[aria-label="Search"][name="q"][maxlength="2048"]');


});