import { Page } from "@playwright/test";
import { WebCommons } from "../../commons/ui/web-commons.ts";
import cookiesPageElements from "../page-elements/cookies-page-elements.json" with {type: "json"};

export class CookiesPageSteps {

    page:Page;
    web: WebCommons;

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //Verify the cookies pop-up is displayed. 
    async verifyCookiesPopupIsDisplayed() {
        await this.web.isElementDisplayed(cookiesPageElements.cookiesPageHeader);
    }

    //Verify cookies pop-up logos. 
    async verifyCookiesPopupLogos(){
        await this.web.isElementDisplayed(cookiesPageElements.creatioLogo);
        await this.web.isElementDisplayed(cookiesPageElements.cookiebotLogo);
    }

    //Verify cookies pop-up content. 
    async verifyCookiesPopupContent(expectedContent:string){
        const actualContent = await this.web.getText(cookiesPageElements.cookiesPopupContent);
        await this.web.compareValues(actualContent, expectedContent);
    }

    //Verify cookies pop-up switch buttons. 
    async verifyCookiesPopupSwitchButtons(){
        await this.web.isElementDisplayed(cookiesPageElements.necessarySwitchButton);
        await this.web.isElementDisplayed(cookiesPageElements.preferencesSwitchButton);
        await this.web.isElementDisplayed(cookiesPageElements.marketingSwitchButton);
        await this.web.isElementDisplayed(cookiesPageElements.statisticsSwitchButton);
    }


}



// Test Case 1: Verify cookies pop-up logos. 

// 1. Enter the URL and launch the application. 
// 2. Verify the cookies pop-up is displayed. 
// 3. Verify cookies pop-up logos. 