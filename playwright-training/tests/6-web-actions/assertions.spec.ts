//Assertions are nothing but a set of default methods provided by Playwright to compare the expected result versus the actual result. 

//In Playwright, there are two different types of assertions available. 

//1. Hard assertions =>  It will fail the program immediately when the expected result is not matching with the actual result. 
//2. Soft assertions => It will continue the program execution even if there is a mismatch and fail at the end of the execution. 


//Syntax for hard assertion : expect(actual).toBe(expected);
//Syntax for soft assertion : expect.soft(actual).toBe(expected);

//By default, Playwright provides multiple default assertion methods for day-to-day validations related to automation. 

// const element = await page.locator('//element')

//expect(element).toBeVisible();
//expect(element).toBeHidden();
//expect(element).toBeEnabled();
//expect(element).toBeDisabled();
//expect(element).toBeChecked();
//expect(element).toHaveText('expected-text');
//expect(element).toHaveAttribute(attribute, value);
//expect(page).toHaveUrl(url);
//expect(element).toHaveTitle(title);
