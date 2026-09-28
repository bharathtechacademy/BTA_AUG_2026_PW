//Hooks are nothing but pre- and post-conditions that need to be added before and after each and every test case during the execution of tests in Playwright.

//1. test.beforeEach => This hook will be executed before each test case.
//2. test.afterEach => This hook will be executed after each test case.
//3. test.beforeAll => This hook will be executed once before all the test cases.
//4. test.afterAll => This hook will be executed once after all the test cases.

import { test } from '@playwright/test';

//Group 1
test.describe('Group 1', () => {

    test('Group 1- Test Case 1', async ({ }) => {
        console.log("Group 1- Test Case 1 Executed Successfully");
    });

    test('Group 1- Test Case 2', async ({ }) => {
        console.log("Group 1- Test Case 2 Executed Successfully");
    });

});

//Group 2
test.describe('Group 2', () => {

    test('Group 2- Test Case 1', async ({ }) => {
        console.log("Group 2- Test Case 1 Executed Successfully");
    });

    test('Group 2- Test Case 2', async ({ }) => {
        console.log("Group 2- Test Case 2 Executed Successfully");
    });

});

test.beforeEach(async ({ }) => {
    console.log("*******BEFORE EACH************");
});

test.afterEach(async ({ }) => {
    console.log("*******AFTER EACH************");
});

test.beforeAll(async ({ }) => {
    console.log("#########BEFORE ALL##########");
});

test.afterAll(async ({ }) => {
    console.log("#########AFTER ALL##########");
});