import {Locator, Page} from '@playwright/test'

export class HomePage {
    //Locators
    readonly page: Page
    readonly linkDragAndDrop: Locator
    readonly linkFileUpload: Locator
    readonly linkDropdown: Locator
    readonly linkBasicAuth: Locator
    readonly linkHovers: Locator

    constructor(page: Page) {
        this.page = page
        this.linkDragAndDrop = page.locator("//a[@href='/drag_and_drop']")
        this.linkFileUpload = page.locator("//a[@href='/upload']")
        this.linkDropdown = page.locator("//a[@href='/dropdown']")
        this.linkBasicAuth = page.locator("//a[@href='/basic_auth']")
        this.linkHovers = page.locator("//a[@href='/hovers']")
    }

    //Actions
    async clickOnDragAndDropLink() {
        await this.linkDragAndDrop.click();
    }

    async clickOnFileUploadLink() {
        await this.linkFileUpload.click();
    }

    async clickOnDropdownLink() {
        await this.linkDropdown.click();
    }

    async clickOnBasicAuthLink() {
        await this.linkBasicAuth.click();
    }

    async clickHoversLink() {
        await this.linkHovers.click();
    }
    
}