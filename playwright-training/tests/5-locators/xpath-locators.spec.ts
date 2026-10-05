//Xpath Locators

//There are two different types of XPath locators available. 
//1. Absolute XPath (The XPath starts from the root element, and it is always going to begin with a single forward slash. For example: /html/body/div)
//2. Relative XPath (The XPath starts from the current element, and it is always going to begin with a double forward slash. For example: //div[@id='example'])

// Playwright supports Relative Xpath

//Xpath Locator Syntaxes

//Syntax 1: //tagname[@attribute="attribute-value"]
//Syntax 2: //tagname[text()="text-value"]

//Syntax 3: //tagname[contains(@attribute,"attribute-value")]
//Syntax 4: //tagname[contains(text(),"text-value")]

//Syntax 5: //tagname[starts-with(@attribute,"attribute-value")]
//Syntax 6: //tagname[starts-with(text(),"text-value")]

//Syntax 7: //tagname[@attribute1="attribute-value" and @attribute2="attribute-value2" and text()="text-value"]

// Advanced Xpath with relationship

//reference-element-xpath/relationship::target-element-xpath

//child
//parent
//ancestor
//following-sibling
//preceding-sibling
//following
//preceding
// //(with-in-the-family)
// /(child)

//target > sibling > parent > ancestor > ancestor's parent 

//ancestor : //ul[@class="leftmenu"]
//parent: //li
//sibling : N/A
//target : //a[text()="Services"] 

//ul[@class="leftmenu"]/child::li/child::a[text()="Services"] 
//ul[@class="leftmenu"]//a[text()="Services"] 
//li[text()="Solutions"]/following-sibling::li[2]/child::a[text()="Services"]
//div[@id="topPanel"]/following-sibling::div[@id="headerPanel"]//a[text()="Services"]
//p[@class="caption"]/ancestor::div[@id="topPanel"]/following-sibling::div[@id="headerPanel"]//a[text()="Services"]

import { test, expect } from '@playwright/test';

test('XPath Locator example', async ({ page }) => {

    //Navigate to the ParabankL home page. 
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    //Locate the 'Logo' image by using syntax 1. 
    await page.locator('//img[@class="logo"]');

    //Locate the 'caption' element by using syntax 2. 
    await page.locator('//p[text()="Experience the difference"]');

    //Locate the 'Logo' image by using syntax 3. 
    await page.locator('//img[contains(@src,"logo")]');

    //Locate the 'caption' element by using syntax 4. 
    await page.locator('//p[contains(text(),"difference")]');

    //Locate the 'Logo' image by using syntax 5. 
    await page.locator('//img[starts-with(@src,"images/logo")]');

    //Locate the 'caption' element by using syntax 6. 
    await page.locator('//p[starts-with(text(),"Experience")]');

    //Locate the 'Logo' image by using syntax 7. 
    await page.locator('//img[@class="logo" and @title="ParaBank" and @alt="ParaBank"]');

    //Locate the 'caption' element by using syntax 7. 
    await page.locator('//p[text()="Experience the difference" and @class="caption"]');

    //Locate the services element by using advanced Xpath. 



});