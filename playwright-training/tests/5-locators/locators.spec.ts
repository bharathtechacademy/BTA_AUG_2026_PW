//WebElement => The element displayed on the application UI 
//Locator => Set of Playwright methods used to identify the location of a web element 

//There are nine different types of locators available in Playwright. 

//1. getByRole
//2. getByLabel
//3. getByPlaceholder
//4. getByText
//5. getByAltText
//6. getByTitle
//7. getByTestId
//8. css selector
//9. xpath

//1. getByRole
//Syntax : await page.getByRole('role', { name: 'value' })
//role => Nature of the element (button,textbox,link,checkbox,radio,heading etc..)
//value => text-value or  value , aria-label, label , title attribute values..

//Example: Locate 'Gmail' link on the page
//await page.getByRole('link', { name: 'Gmail' })
