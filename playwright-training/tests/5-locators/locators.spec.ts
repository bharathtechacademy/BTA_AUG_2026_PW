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

//2. getByLabel
//Syntax : await page.getByLabel('label-text')
//label-text => The text of the label associated with the element

//tagName => label 
//label-text => text value

//Example: Locate 'Name' label on the page (https://demoqa.com/automation-practice-form)
//await page.getByLabel('Name')

//3.getByPlaceholder
//Syntax : await page.getByPlaceholder('placeholder-text')
//placeholder-text => The placeholder attribute value of the element

//Example: Locate 'First Name' input field using its placeholder on the page (https://demoqa.com/automation-practice-form)
//await page.getByPlaceholder('First Name');

//4. getByText
//Syntax : await page.getByText('text-value')
//text-value => The visible text content of the element

//Example: Locate 'Practice Form' header using its text on the page (https://demoqa.com/automation-practice-form)
//await page.getByText('Practice Form')

//5. getByAltText
//Syntax : await page.getByAltText('alt-text')
//alt-text => The alt attribute value of the element

//Example: Locate 'Logo' image using its alt text on the page (https://parabank.parasoft.com/parabank/index.htm)
//await page.getByAltText('ParaBank')

//6. getByTitle
//Syntax : await page.getByTitle('title-text')
//title-text => The title attribute value of the element

//Example: Locate 'Logo' image using its title on the element (https://parabank.parasoft.com/parabank/index.htm)
//await page.getByTitle('ParaBank');

//7. getByTestId
//Syntax : await page.getByTestId('test-id')
//test-id => The data-testid attribute value of the element

//data-testid="desktop-app-shell"

//Example: Locate 'Desktop App Shell' using its test id on the page (https://chatgpt.com)
//await page.getByTestId('desktop-app-shell')