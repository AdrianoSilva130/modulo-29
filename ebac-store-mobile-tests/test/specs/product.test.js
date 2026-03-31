import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import browsePage from '../pageobjects/browse.page.js'
import productPage from '../pageobjects/product.page.js'

describe('Product Details', () => {
    it('should view product info', async () => {
        await homePage.search()
        await browsePage.searchInput.setValue('Camiseta')
         const products = await browsePage.products
        await products[0].click()

        const title = await productPage.getProductTitle('Camiseta')
        await title.waitForDisplayed({ timeout: 20000 })

        await expect(title).toBeDisplayed()
    })
})

