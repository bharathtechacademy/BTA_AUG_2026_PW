//annotations => Annotations are all about a set of keywords and default methods provided by Playwright to run all our test cases. 

//test => Refers to an independent test method to be executed by Playwright 
//test.describe => Refers to a block that groups multiple test cases together in Playwright.

//test.only() => This annotation will be used to run only a particular test case, by ignoring all other tests.
//test.skip() => This annotation will be used to skip a particular test case.
//test.fixme() => Annotation will be used to mark a specific test case that needs to be fixed. Until then, don't run.  (to be fixed later)
//test.fail() => This annotation will be used to mark a specific test case that is expected to fail. 
//test.slow() => This annotation will be used to mark a specific test case as slow. So that Playwright can increase the wait time three times more than the regular time 


import { test, expect } from '@playwright/test';


test.skip('Test Case 1', async ({ page }) => {
    expect(1).toBe(1);
    console.log("Test Case 1 Executed Successfully");
});

test('Test Case 2', async ({ page }) => {
    test.slow();
    await new Promise(resolve => setTimeout(resolve, 42000));//wait 42 sec to complete the line
    console.log("Test Case 2 Executed Successfully");
});

test('Test Case 3', async ({ page }) => {
    console.log("Test Case 3 Executed Successfully");
});
