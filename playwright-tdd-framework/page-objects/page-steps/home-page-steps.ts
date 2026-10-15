import { Page } from "@playwright/test";
import { WebCommons } from "../../commons/ui/web-commons.ts";
import homePageElements from "../page-elements/home-page-elements.json" with {type: "json"};

export class HomePageSteps {

    page: Page;
    web: WebCommons;

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //Method to verify the home page is displayed
    async verifyHomePageIsDisplayed(){
        await this.web.isElementDisplayed(homePageElements.homePageHeader);
    }
}