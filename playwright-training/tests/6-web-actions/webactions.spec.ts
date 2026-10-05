import { test, expect } from '@playwright/test';

test('Playwright WebActions', async ({ page }) => {

    //Navigate to the Google home page. 
    await page.goto('https://www.google.com');

    //Locate the web element. 
    const element = await page.locator('input[name="q"]');

    /*====================================
         Common WebElement Actions
    ==================================== */

    //Check if the element is visible or not. 
    const isElementVisible = await element.isVisible();

    //Check if the element is enabled. 
    const isElementEnabled = await element.isEnabled();

    //Check if the checkbox is already checked. 
    const isElementChecked = await element.isChecked();

    //Check if the element has disappeared. 
    const isElementDisappered = await element.isHidden();

    /*====================================
         Button WebElement Actions
    ==================================== */

    //Locate the button element. 
    const button = await page.locator('button[name="q"]');

    //Verify the label of the button. 
    const buttonLabel = await button.getAttribute("value"); //If label is added as an attribute value 
    const buttonText = await button.textContent(); //If label is added as text value

    //Click on the button. 
    await button.click();

    //Right-click on the button. 
    await button.click({ button: 'right' });

    //Double-click on the button. 
    await button.dblclick();

    //Mouse hover on the button. 
    await button.hover();

    //Scroll till the button is visible. 
    await button.scrollIntoViewIfNeeded();

    //Force click on the button. 
    await button.click({force:true});//When an element is overlapped by another element, but you still want to perform a click action on the element 

    //Drag the button and drop it on some other element. 
    const targetElement = await page.locator('input[name="q"]');
    await button.dragTo(targetElement);

    /*====================================
         Textbox WebElement Actions
    ==================================== */

    //Locate the textbox element. 
    const textbox = await page.locator('input[name="firstname"]');

    //Verify the placeholder of the text box. 
    const placeholderText = await textbox.getAttribute("placeholder");

    //Clear the pre-populated text within the text box. 
    await textbox.clear();

    //Type the text within the text box. 
    await textbox.fill('Bharath');

    //Verify the text entered into the text box. 
    const textEntered = await textbox.getAttribute('value');

    //Press the function keys within the text box. 
    await textbox.press('Enter');

    /*====================================
         Checkbox WebElement Actions
    ==================================== */

    //Locate the checkbox element. 
    const checkbox = await page.locator('input[name="hobbies"]');

    //Select the checkbox only if it is not selected already. 
    const isCheckboxSelected = await checkbox.isChecked();

    if(!isCheckboxSelected){
        checkbox.check();
    }

    /*====================================
         Radio button WebElement Actions
    ==================================== */

    //Locate the radio button element. 
    const radioButton = await page.locator('input[name="gender"]');

    //Select the specific radio button. 
    await radioButton.check();

    /*====================================
         Dropdown WebElement Actions
    ==================================== */

    //Locate the dropdown element. 
    const dropdown = await page.locator('select[name="country"]');

    //Select one of the options from the dropdown. 
    await dropdown.selectOption({label:'Web Service'});
    await dropdown.selectOption({value:'ws'});
    await dropdown.selectOption({index:1});

    //Verify the option selected from the dropdown.
    const selectedOption = await dropdown.inputValue();
    
    //Extract all the options available in the dropdown and verify the same. 
    const allOptions = await dropdown.locator('option').allTextContents();

    //Verify the dropdown is a multi-select dropdown.
    const isMultiSelectDropdown = await dropdown.getAttribute('multiple');
    
    //Select multiple options from the dropdown if it is a multi-select dropdown. 
    if(isMultiSelectDropdown){
        await dropdown.selectOption([{label:'Web Service'},{label:'Loan'}]);
    }

    /*====================================
         Image WebElement Actions
    ==================================== */

    //Locate the image element. 
    const image = await page.locator('img[name="logo"]');

    //Verify the image is displayed on the page. 
    const isImageDisplayed = await image.isVisible();

    //Verify the image is valid. 
    const imageSourcePath = await image.getAttribute('src');
    const expectedImageSourcePath = 'path/to/expected/image.png';
    await expect(imageSourcePath).toBe(expectedImageSourcePath);

    //Verify the position of the image within the web page. 
    const imagePosition = await image.boundingBox();
    const x = await imagePosition?.x;
    const y = await imagePosition?.y;

    //Verify the resolution of the image.
    const height = await imagePosition?.height; 
    const width = await imagePosition?.width;

    /*====================================
         Hyperlink WebElement Actions
    ==================================== */

    //Locate the Hyperlink element. 
    const link = await page.locator('a[name="gmail"]');

    //Get the hyperlink value from the 'href' attribute. 
    const hyperlinkValue = await link.getAttribute('href');

    //Click on the hyperlink and get the URL from the new page. 
    await link.click();
    const hyperlink = await page.url();

    /*====================================
         Text WebElement Actions
    ==================================== */

    //Locate the text element. 
    const text = await page.locator('h1[name="google-header"]');

    //Get the text value from the element. 
    const textValue = await text.textContent();

    /*====================================
         File Upload WebElement Actions
    ==================================== */

    //Locate the fileUpload element. 
    const fileUpload = await page.locator('upload[name="profile"]');

    //Upload the file. 
    await fileUpload.setInputFiles(['path/to/file.jpg', 'path/to/file2.jpg']);

});