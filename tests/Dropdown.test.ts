import {test, expect} from '@playwright/test'
import {HomePage} from '../pages/Home.page'
import {DropdownPage} from '../pages/Dropdown.page'
import {CommonFunctionsPage} from '../commonFunctions/CommonFunctions'
import * as Environment from "../utils/environment.json"

test.describe.parallel.only('Dropdown', () => {
    let homePage: HomePage
    let dropdownPage: DropdownPage
    let commonFunctionsPage: CommonFunctionsPage
    
    // Before Hook
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page)
        dropdownPage = new DropdownPage(page)
        commonFunctionsPage = new CommonFunctionsPage(page)

        await page.goto(Environment.url)
        await commonFunctionsPage.validatePageTitle('The Internet', page)
        await homePage.clickOnDropdownLink()
        await expect (dropdownPage.dropdownPageHeader).toBeVisible()
    })

    test('Verify that user can select option1 from the dropdown', async ({}) => {
        await dropdownPage.selectOption1FromDropdown()
        await expect(dropdownPage.option1Value).toHaveAttribute('selected','selected')
    })

    test('Verify that user can select option2 from the dropdown', async ({}) => {
        await dropdownPage.selectOption2FromDropdown()
        await expect(dropdownPage.option2Value).toHaveAttribute('selected','selected')
    })

})