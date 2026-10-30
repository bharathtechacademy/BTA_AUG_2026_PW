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

    //Verify cookies pop-up content. 
    async verifyCookiesPopupContent(expectedContent:string){
        const actualContent = await this.web.getText(cookiesPageElements.cookiesPopupContent);
        await this.web.compareValues(actualContent, expectedContent);
    }

    //Verify cookies pop-up logos. 
    async verifyCookiesPopupLogos(){
        await this.web.isElementDisplayed(cookiesPageElements.creatioLogo);
        await this.web.isElementDisplayed(cookiesPageElements.cookiebotLogo);
    }

    //Verify cookies pop-up switch buttons. 
    async verifyCookiesPopupSwitchButtons(){
        await this.web.isElementDisplayed(cookiesPageElements.necessarySwitchButton);
        await this.web.isElementDisplayed(cookiesPageElements.preferencesSwitchButton);
        await this.web.isElementDisplayed(cookiesPageElements.marketingSwitchButton);
        await this.web.isElementDisplayed(cookiesPageElements.statisticsSwitchButton);
    }

    //Verify cookies pop-up selection buttons. 
    async verifyCookiesPopupSelectionButtons(){
        await this.web.isElementDisplayed(cookiesPageElements.allowAllButton);
        await this.web.isElementDisplayed(cookiesPageElements.allowSelectionButton);
        await this.web.isElementDisplayed(cookiesPageElements.denyButton);
    }

    //Verify the "Show Details" link displayed in the cookies pop-up. 
    async verifyShowDetailsLinkIsDisplayed(){
        await this.web.isElementDisplayed(cookiesPageElements.showDetailsLink);
    }

    //Click on the "Show details" link. 
    async clickShowDetailsLink(){
        await this.web.click(cookiesPageElements.showDetailsLink);
    }

    //Verify the cookies pop-up expanded view is displayed. 
    async verifyCookiesPopupExpandedViewIsDisplayed(){
        await this.web.isElementDisplayed(cookiesPageElements.cookiesPopupExpandedContent);
    }

    //Click on the selection buttons in the cookies pop-up. 
    async clickOnSelectionButton(buttonName: string){
        switch(buttonName.toLowerCase()){
            case "allow all":
                await this.web.click(cookiesPageElements.allowAllButton);
                break;
            case "allow selection":
                await this.web.click(cookiesPageElements.allowSelectionButton);
                break;
            case "deny":
                await this.web.click(cookiesPageElements.denyButton);
                break;
            default:
                throw new Error(`Unknown selection button: ${buttonName}`);
        }
    }

    //Verify cookies pop-ups close successfully. 
    async verifyCookiesPopupIsClosed(){
        await this.web.isDisappeared(cookiesPageElements.cookiesPageHeader);
    }


}

