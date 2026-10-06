import { test, expect } from '@playwright/test';

test('parabank login and services test', async ({ page }) => {

    
// 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
await page.goto('https://parabank.parasoft.com/parabank/index.htm');

// 2.verify application logo is displayed
const logo = await page.locator('img[class="logo"]');
await expect(logo).toBeVisible();

// 3.Verify application caption displayed as "Experience the difference"
const caption = await page.locator('p.caption');
await expect(caption).toHaveText('Experience the difference');

// 4.Enter invalid username
const username = await page.locator('input[name="username"]');
await username.fill('Invalid User');

// 5.Enter empty Password
const password = await page.locator('input[name="password"]');
// await password.fill('');

// 6.Click on login button
const loginButton = await page.locator('input[value="Log In"]');
await loginButton.click();


// 7.Verify the error message "Please enter a username and password."
const error = await page.locator('p[class="error"]');
const actualError = await error.textContent();
await expect(actualError).toBe('Please enter a username and password.');

// 8.Click on admin page link
const adminLink = await page.locator('//a[text()="Admin Page"]');
await adminLink.click();

// 9.select the option "soap" from dba mode radio button
await selectDBAMode(page, 'soap');

// 10.Scroll to element dropdown
const loanProvider = await page.locator('select#loanProvider');
await loanProvider.scrollIntoViewIfNeeded();

// 11.Select the option web service from the dropdown
await loanProvider.selectOption({label:'Web Service'});

// 12.click on submit button
const submitButton = await page.locator('input[value="Submit"]');
await submitButton.click();

// 13.verify submission is successful by validating success message
const successMessage = await page.locator('//b[text()="Settings saved successfully."]');
await expect(successMessage).toBeVisible();

// 14.Click on services menu link
const serviceMenuLink = await page.locator('//ul[@class="leftmenu"]//a[text()="Services"]');
await serviceMenuLink.click();

// 15.wait for service page
const bookstoreServices = await page.locator('//span[text()="Bookstore services:"]');
await expect(bookstoreServices).toBeVisible();

// 16.Scroll down till bookstore services table
await bookstoreServices.scrollIntoViewIfNeeded();

// 17.get total rows of books store services table
const rows = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tbody//tr');
const totalRows = await rows.count();

// 18.get total columns of books store services table
const columns = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tbody//tr[1]//td');
const totalColumns = await columns.count();

// 19.Print table data (row wise and column wise data)
for(let r = 1; r<=totalRows ; r++){

    for(let c= 1; c<=totalColumns ; c++){
        const cell = await page.locator(`//span[text()="Bookstore services:"]/following-sibling::table[1]/tbody//tr[${r}]//td[${c}]`);
        console.log(`row ${r} column ${c} value is : ${await cell.textContent()}`)
    }
}

});

async function selectDBAMode(page :any, option:string) {
    const dbaMode = await page.locator(`input[value="${option}"]`)
    await dbaMode.click();
}
