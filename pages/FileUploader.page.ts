import {Locator, Page} from '@playwright/test'

export class FileUploaderPage {
    //Locators
    readonly page: Page
    readonly fileUploaderPageHeader: Locator
    readonly chooseFileButton: Locator
    readonly uploadButton: Locator
    readonly fileUploadedText: Locator
    readonly uploadedFileName: Locator

    constructor(page: Page) {
        this.page = page
        this.fileUploaderPageHeader = page.locator("//div/h3[text()='File Uploader']")
        this.chooseFileButton = page.locator("//input[@id='file-upload']")
        this.uploadButton = page.locator("//input[@id='file-submit']")
        this.fileUploadedText = page.locator("//div/h3[text()='File Uploaded!']") 
        this.uploadedFileName = page.locator("//div[@id='uploaded-files']")   
    }

    //Actions
    async chooseAFile() {
        const filePath = 'test_data/myfile.pdf'
        await this.chooseFileButton.setInputFiles(filePath)
    }

    async clickOnUploadButton() {
        await this.uploadButton.click()
    }

}