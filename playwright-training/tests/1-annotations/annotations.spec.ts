//annotations => Annotations are all about a set of keywords and default methods provided by Playwright to run all our test cases. 

//test => Refers to an independent test method to be executed by Playwright 
//test.describe => Refers to a block that groups multiple test cases together in Playwright.


import { test } from '@playwright/test';

//Independent testcase
test('Independent test case example', async ({ page }) => {
  console.log("This is an independent test case example");
});

//Grouped test cases
test.describe('Group1', () => {

    test('Group1 - Test1', async ({ page }) => {
        console.log("This is Group1 - Test1");
    });

    test('Group1 - Test2', async ({ page }) => {
        console.log("This is Group1 - Test2");
    });
});

test.describe('Group2', () => {

    test('Group2 - Test1', async ({ page }) => {
        console.log("This is Group2 - Test1");
    });

    test('Group2 - Test2', async ({ page }) => {
        console.log("This is Group1 - Test2");
    });
});