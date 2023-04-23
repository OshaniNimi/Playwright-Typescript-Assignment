import {Locator, Page} from '@playwright/test'

export class HoversPage {
    //Locators
    readonly page: Page
    readonly hoversPageHeader: Locator
    readonly firstAvatarImage: Locator
    readonly secondAvatarImage: Locator
    readonly thirdAvatarImage: Locator
    readonly displayingTextAfterMouseHoverOnfirstAvatarImage: Locator
    readonly displayingTextAfterMouseHoverOnSecondAvatarImage: Locator
    readonly displayingTextAfterMouseHoverOnThirdAvatarImage: Locator

    constructor(page: Page) {
        this.page = page
        this.hoversPageHeader = page.locator("//div/h3[text()='Hovers']")
        this.firstAvatarImage = page.locator("(//div/img[@src='/img/avatar-blank.jpg'])[1]")
        this.secondAvatarImage = page.locator("(//div/img[@src='/img/avatar-blank.jpg'])[2]")
        this.thirdAvatarImage = page.locator("(//div/img[@src='/img/avatar-blank.jpg'])[3]") 
        this.displayingTextAfterMouseHoverOnfirstAvatarImage = page.locator("//div/h5[text()='name: user1']")   
        this.displayingTextAfterMouseHoverOnSecondAvatarImage = page.locator("//div/h5[text()='name: user2']")   
        this.displayingTextAfterMouseHoverOnThirdAvatarImage = page.locator("//div/h5[text()='name: user3']")   
    }

    //Actions
    async mouseHoverOnFirstAvatarImage() {
        await this.firstAvatarImage.hover()
    }

    async mouseHoverOnSecondAvatarImage() {
        await this.secondAvatarImage.hover()
    }

    async mouseHoverOnThirdAvatarImage() {
        await this.thirdAvatarImage.hover()
    }
    
}