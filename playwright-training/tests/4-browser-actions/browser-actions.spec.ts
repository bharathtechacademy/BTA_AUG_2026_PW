import {test , chromium, expect} from '@playwright/test';

test('browser actions', async ({  }) => {

    // browser engine => browser context (incognito) => page (tab)

    // Launch the 'Chromium' browser engine to get the Edge browser. 
    // const browserEngine = await chromium.launch(); // Launch the chrome browser engine
    const browserEngine = await chromium.launch({channel: 'msedge' ,  headless: false}); // Launch the edge browser engine in headed mode

    //Launch the browser context within the browser engine. (incognito)
    const browserContext = await browserEngine.newContext(); // Launch a new incognito browser context within the browser engine

    //Clear all the cookies within the browser context. 
    await browserContext.clearCookies();

    //Launch the new page within the browser context. (tab)
    const page = await browserContext.newPage(); // Launch a new page (tab) within the incognito browser context

    //Resize the browser window to a specific resolution, like 1920 x 1080. 
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Enter the URL and navigate to the specific application page. 
    await page.goto('https://playwright.dev/'); 

    // Verify whether the Playwright application is launched successfully by using the title of the web page. 
    await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");

    //Enter a different URL within the same page and navigate to the new application. 
    await  page.goto('https://www.google.com/'); 

    // Navigate back to the Playwright application from the current page. 
    await page.goBack();

    // Navigate forward to the Google application from the current page. 
    await page.goForward();

    //Refresh the page or reload the page. 
    await page.reload();

    //Launch the new page. 
    const page2 = await browserContext.newPage();

    //Enter URL: www.selenium.dev and navigate to the Selenium application. 
    await page2.goto('https://www.selenium.dev/'); 

    //Go back to the previous tab and display the Playwright application. 
    await page.bringToFront();

    // Get the currentURL of a particular page. 
    const currentURL =await page.url();
    console.log(currentURL);

    //Close the current page. 
    await page.close();

    //Close the browser context and all the pages and contexts within the browser engine. 
    await browserContext.close();

    //Close the browser engine. 
    await browserEngine.close();


});