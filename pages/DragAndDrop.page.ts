import {Locator, Page} from '@playwright/test'

export class DragAndDropPage {
    //Locators
    readonly page: Page
    readonly dragAndDropPageHeader: Locator
    readonly columnA: Locator
    readonly columnAHeader: Locator
    readonly columnB: Locator
    readonly columnBHeader: Locator

    constructor(page: Page) {
        this.page = page
        this.dragAndDropPageHeader = page.locator("//div/h3[text()='Drag and Drop']")
        this.columnA = page.locator("//div[@id='column-a']")
        this.columnAHeader = page.locator("//div[@id='column-a']/header")
        this.columnB = page.locator("//div[@id='column-b']") 
        this.columnBHeader = page.locator("//div[@id='column-b']/header")   
    }

    //Actions
    async dragColumnAtoColumnB() {
        await this.columnA.dragTo(this.columnB)
    }

    async dragColumnBtoColumnA() {
        await this.columnB.dragTo(this.columnA)
    }
    
}