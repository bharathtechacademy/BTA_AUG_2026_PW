import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";

import config from '../../config/config.json' with {type: 'json'};

export class WebCommons {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Common method to launch the application and verify the title of the application 
    async launchApplication() {
        await this.page.goto(config.web.url);
        await expect(this.page).toHaveTitle(config.web.title);
    }

    // Common method to generate a web element from the locator 
    async element(locator: string) {
        return this.page.locator(locator);
    }

    // Common method to click on the element 
    async click(locator: string) {
        const element = await this.element(locator);
        await element.click();
    }

    //Common method to type the text into a text box 
    async enterText(locator: string, text: string) {
        const textbox = await this.element(locator);
        await textbox.clear();
        await textbox.fill(text);
    }

    //Common method to scroll to the web element 
    async scrollToElement(locator: string) {
        const element = await this.element(locator);
        await element.scrollIntoViewIfNeeded();
    }

    //Common method to double-click on the element 
    async doubleClick(locator: string) {
        const element = await this.element(locator);
        await element.dblclick();
    }

    //Common method to perform a right-click 
    async rightClick(locator: string) {
        const element = await this.element(locator);
        await element.click({ button: 'right' });
    }

    //Common method to perform force click 
    async forceClick(locator: string) {
        const element = await this.element(locator);
        await element.click({ force: true });
    }

    //Common method to mouse over 
    async mouseOver(locator: string) {
        const element = await this.element(locator);
        await element.hover();
    }

    //Common method to select the option from the dropdown 
    async selectOption(locator: string, option: string) {
        const element = await this.element(locator);
        await element.selectOption(option);
    }

    //Common method to get the text from the web element 
    async getText(locator: string): Promise<string | null> {
        const element = await this.element(locator);
        return await element.textContent();
    }

    //Common method to get the attribute value from the web element 
    async getAttribute(locator: string, attribute: string): Promise<string | null> {
        const element = await this.element(locator);
        return await element.getAttribute(attribute);
    }

    //Common method to select the checkbox 
    async selectCheckbox(locator: string, status: boolean) { //false
        const element = await this.element(locator);
        const isChecked = await element.isChecked(); //true
        if (isChecked !== status) {
            await element.check();
        }
    }

    //Common method to verify whether an element is displayed 
    async isElementDisplayed(locator: string) {
        const element = await this.element(locator);
        await expect(element).toBeVisible();
    }

    //Common method to verify whether an element has disappeared 
    async isDisappeared(locator: string): Promise<boolean> {
        const element = await this.element(locator);
        return await element.isHidden();
    }

    //Common method to upload the file 
    async uploadFile(locator: string, filePath: string) {
        const element = await this.element(locator);
        await element.setInputFiles(filePath);
    }

    //Common method to take a screenshot 
    async takeScreenshot(locator: string, screenshotName: string) {
        await this.page.screenshot({ path: `./test-results/screenshots/${screenshotName}.png` });
    }

    //Common method to take a full-page screenshot 
    async takeFullPageScreenshot(screenshotName: string) {
        await this.page.screenshot({ path: `./test-results/screenshots/${screenshotName}.png`, fullPage: true });
    }

    //Common method to take an element screenshot 
    async takeElementScreenshot(locator: string, screenshotName: string) {
        const element = await this.element(locator);
        await element.screenshot({ path: `./test-results/screenshots/${screenshotName}.png` });
    }

    //Common method to handle the alert 
    async handleAlert(action: string, promptText?: string) {
        this.page.on('dialog', async dialog => {
            if (action.toLowerCase() === 'accept') {
                await dialog.accept(promptText);
            } else if (action.toLowerCase() === 'dismiss') {
                await dialog.dismiss();
            }
        });
    }

    //Common method to locate the element inside the frame 
    async elementInsideFrame(frameLocator: string, elementLocator: string): Promise<any> {
        const frame = await this.page.frameLocator(frameLocator);
        return await frame.locator(elementLocator);
    }

    //Common method to compare two different values 
    async compareValues(value1: any, value2: any) {
        await expect(value1).toBe(value2);
    }

    //Common method to verify value 1 contains value 2 
    async containsValue(value1: any, value2: any) {
        await expect(value1).toContain(value2);
    }


}