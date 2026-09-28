import { test } from '@playwright/test';

test('Test Case 1', {tag : '@Smoke'},async ({ page }) => {
    console.log("Test Case 1 Executed Successfully");
});

test('Test Case 2', {tag : '@Sanity'},async ({ page }) => {
    console.log("Test Case 2 Executed Successfully");
});

test('Test Case 3', {tag : '@Regression'},async ({ page }) => {
    console.log("Test Case 3 Executed Successfully");
});

test('Test Case 4',{tag : ['@Smoke', '@Regression']}, async ({ page }) => {
    console.log("Test Case 4 Executed Successfully");
});