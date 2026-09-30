//CSS Locator => Locating the element by using CSS properties of the element

//Syntax : await page.locator('css-selector')
//css-selector => The CSS selector of the element


//Syntax : reference-element >> target-element

//target > parent > grand-parent > great-grand-parent


//grand-parent : ul[class="leftmenu"]
//parent : li
//target : a[href="services.htm"]

// ul[class="leftmenu"] > li > a[href="services.htm"]

import { test, expect } from '@playwright/test';

test('Advanced CSS Locator example', async ({ page }) => {

    //Navigate to the Parabank  home page. 
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    //Locate the 'Services' link by using css selector
    await page.locator('aaaa');



});