import { test, expect } from '@playwright/test';

test('Demo QA Automation Practice Form', async ({ page }) => {

// 1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)
await page.goto('https://demoqa.com/automation-practice-form');

// 2. Wait for Page-load
const logo = await page.locator('//img[contains(@src,"Toolsqa")]');
await expect(logo).toBeVisible();

//take screenshot of logo
await logo.screenshot({path: './screenshots/logo.png'});

// 3. Enter First name and Last name
const firstName = await page.locator('//input[@id="firstName"]');
const lastName = await page.locator('//input[@id="lastName"]');

await firstName.fill("Bharath");
await lastName.fill("Reddy");

// 4. Enter Email
const email = await page.locator('//input[@id="userEmail"]');
await email.fill('BharathTechAcademy@gmail.com');

// 5. Select Gender (Male)
await selectGeneder(page, "Male");

// 6. Enter mobile number
const mobile = await page.locator('//input[@id="userNumber"]');
await mobile.fill('9553220022');

// 7.Select DOB (1-Feb-1991)
await selectDOB(page, "1", "February", "1991");

// 8.Search and Select Computer Science and English
const subjects = ['Computer Science', 'English'];
await selectSubjects(page, subjects);

// 9.Select Hobbies as Sports and Reading
const hobbies = ['Sports', 'Reading'];  
await selectHobbies(page, hobbies);

// 10.Upload photo
const uploadButton = await page.locator('//input[@id="uploadPicture"]');
await uploadButton.setInputFiles('./files/Photo.png');

// 11.Submit Details
const submitButton = await page.locator('//button[@id="submit"]');
await submitButton.click({force: true});

// take screenshot 
await page.screenshot({path: './screenshots/form_submission.png'});
await page.screenshot({path: './screenshots/form_submission_full_page.png' , fullPage: true});
});

//Method to select the gender 
async function selectGeneder(page: any, option :string){
    const gender = await page.locator(`//input[@value="${option}"]`);
    await gender.click();
}

//Common method to select the date of birth
async function selectDOB(page: any, date:string, month:string, year:string){

    //Launch the calendar. 
    const dobInput = await page.locator('//input[@id="dateOfBirthInput"]');
    await dobInput.click();

    //Select Month
    const monthDropdown = await page.locator('//select[@class="react-datepicker__month-select"]');
    await monthDropdown.selectOption({ label: month });

    //Select Year
    const yearDropdown = await page.locator('//select[@class="react-datepicker__year-select"]');
    await yearDropdown.selectOption({ label: year });

    //Select date 
    const dateInput = await page.locator(`//div[text()="${date}" and contains(@aria-label,"${month}") ]`);
    dateInput.click();

}

//Common method to select subjects 
async function selectSubjects(page: any, subjects: string[]){
    
    //Locate the subject suggestion box. 
    const subjectInput = await page.locator('//input[@id="subjectsInput"]');

    //By using a for loop, select each and every subject updated in the subjects array. 
    for(const subject of subjects){
        
        //Fill the subject name in the suggestion box. 
        await subjectInput.fill(subject);
       
        //Press the Enter button to select the suggestion. 
         await subjectInput.press('Enter');
    }
}

//Common method to select hobbies 
async function selectHobbies(page: any, hobbies: string[]){
    for(const hobby of hobbies){        
        const hobbyInput = await page.locator(`//label[text()="${hobby}"]`);
        await hobbyInput.click({force: true});
    }
}