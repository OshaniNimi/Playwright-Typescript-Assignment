import {test, expect} from '@playwright/test'
import {HomePage} from '../pages/Home.page'
import {FileUploaderPage} from '../pages/FileUploader.page'
import {CommonFunctionsPage} from '../commonFunctions/CommonFunctions'
import * as Environment from "../utils/environment.json"

test.describe.parallel.only('File Upload', () => {
    let homePage: HomePage
    let fileUploaderPage: FileUploaderPage
    let commonFunctionsPage: CommonFunctionsPage

    // Before Hook
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page)
        fileUploaderPage = new FileUploaderPage(page)
        commonFunctionsPage = new CommonFunctionsPage(page)

        await page.goto(Environment.url)
        await commonFunctionsPage.validatePageTitle('The Internet', page)
        await homePage.clickOnFileUploadLink()
        await expect (fileUploaderPage.fileUploaderPageHeader).toBeVisible()
    })

    test('Verify that user can upload a file', async ({}) => {
        await fileUploaderPage.chooseAFile()
        await fileUploaderPage.clickOnUploadButton()
        await expect (fileUploaderPage.fileUploadedText).toBeVisible()
        await expect(fileUploaderPage.uploadedFileName).toHaveText('myfile.pdf')
    })

})