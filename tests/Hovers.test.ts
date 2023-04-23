import {test, expect} from '@playwright/test'
import {HomePage} from '../pages/Home.page'
import {HoversPage} from '../pages/Hovers.page'
import {CommonFunctionsPage} from '../commonFunctions/CommonFunctions'
import * as Environment from "../utils/environment.json"

test.describe.parallel.only('Mouse Hover', () => {
    let homePage: HomePage
    let hoversPage: HoversPage
    let commonFunctionsPage: CommonFunctionsPage

    // Before Hook
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page)
        hoversPage = new HoversPage(page)
        commonFunctionsPage = new CommonFunctionsPage(page)

        await page.goto(Environment.url)
        await commonFunctionsPage.validatePageTitle('The Internet', page)
        await homePage.clickHoversLink()
        await expect (hoversPage.hoversPageHeader).toBeVisible()
    })

    test('Verify that mouse hover on avatar image 1 working correctly', async ({}) => {
        await hoversPage.mouseHoverOnFirstAvatarImage()
        await expect (hoversPage.displayingTextAfterMouseHoverOnfirstAvatarImage).toBeVisible()
    })

    test('Verify that mouse hover on avatar image 2 working correctly', async ({}) => {
        await hoversPage.mouseHoverOnSecondAvatarImage()
        await expect (hoversPage.displayingTextAfterMouseHoverOnSecondAvatarImage).toBeVisible()
    })

    test('Verify that mouse hover on avatar image 3 working correctly', async ({}) => {
        await hoversPage.mouseHoverOnThirdAvatarImage()
        await expect (hoversPage.displayingTextAfterMouseHoverOnThirdAvatarImage).toBeVisible()
    })

})