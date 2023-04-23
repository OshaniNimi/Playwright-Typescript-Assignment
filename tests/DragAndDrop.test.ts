import {test, expect} from '@playwright/test'
import {HomePage} from '../pages/Home.page'
import {DragAndDropPage} from '../pages/DragAndDrop.page'
import {CommonFunctionsPage} from '../commonFunctions/CommonFunctions'
import * as Environment from "../utils/environment.json"

test.describe.parallel.only('Drag And Drop', () => {
    let homePage: HomePage
    let dragAndDropPage: DragAndDropPage
    let commonFunctionsPage: CommonFunctionsPage

    // Before Hook
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page)
        dragAndDropPage = new DragAndDropPage(page)
        commonFunctionsPage = new CommonFunctionsPage(page)

        await page.goto(Environment.url)
        await commonFunctionsPage.validatePageTitle('The Internet', page)
        await homePage.clickOnDragAndDropLink()
        await expect (dragAndDropPage.dragAndDropPageHeader).toBeVisible()
    })

    test('Verify that user can drag columnA to columnB', async ({}) => {
        await dragAndDropPage.dragColumnAtoColumnB()
        await expect(dragAndDropPage.columnAHeader).toHaveText('B')
        await expect(dragAndDropPage.columnBHeader).toHaveText('A')
    })

    test('Verify that user can drag columnB to columnA', async ({}) => {
        await dragAndDropPage.dragColumnBtoColumnA()
        await expect(dragAndDropPage.columnAHeader).toHaveText('B')
        await expect(dragAndDropPage.columnBHeader).toHaveText('A')
    })

})