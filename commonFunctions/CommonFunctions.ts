import {expect, Locator, Page} from '@playwright/test'

export class CommonFunctionsPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    //Validations
    async validatePageTitle(pageTitle: string, page) {
        await expect(page).toHaveTitle(pageTitle)
    }

}

