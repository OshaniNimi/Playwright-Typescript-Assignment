import {test, expect} from '@playwright/test'
import {HomePage} from '../pages/Home.page'
import {CommonFunctionsPage} from '../commonFunctions/CommonFunctions'
import * as Environment from "../utils/environment.json"

test.describe.parallel.only('Basic Auth', () => {
    let homePage: HomePage
    let commonFunctionsPage: CommonFunctionsPage

    // Before Hook
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page)
        commonFunctionsPage = new CommonFunctionsPage(page)

        await page.goto(Environment.url)
        await commonFunctionsPage.validatePageTitle('The Internet', page)
        await homePage.clickOnBasicAuthLink()
    })

    test('Verify that user can verify basic authentication successfully', async ({ browser }) => {
        const context = await browser.newContext({
            httpCredentials: {
                username: "admin",
                password: "admin"
            }
        })
        const page = await context.newPage()
        await page.goto("https://the-internet.herokuapp.com/basic_auth")
        const header = await page.$("h3")
        if (header) {
            expect(await header.textContent()).toBe("Basic Auth")
        }
    })

})