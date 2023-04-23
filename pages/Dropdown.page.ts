import {Locator, Page} from '@playwright/test'

export class DropdownPage {
    //Locators
    readonly page: Page
    readonly dropdownPageHeader: Locator
    readonly optionsDropdown: Locator
    readonly option1Value: Locator
    readonly option2Value: Locator

    constructor(page: Page) {
        this.page = page
        this.dropdownPageHeader = page.locator("//div/h3[text()='Dropdown List']")
        this.optionsDropdown = page.locator("//select[@id='dropdown']")
        this.option1Value = page.locator("//select/option[@value='1']")
        this.option2Value = page.locator("//select/option[@value='2']")
    }

    //Actions
    async selectOption1FromDropdown() {
        await this.optionsDropdown.selectOption({ label: 'Option 1' })
    }

    async selectOption2FromDropdown() {
        await this.optionsDropdown.selectOption({ label: 'Option 2' })
    }
    
}