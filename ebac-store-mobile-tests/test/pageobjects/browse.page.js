import { $, $$ } from '@wdio/globals'

class BrowsePage {

    get searchInput() {
        return $(`-ios predicate string:name == "searchInput"`)
    }

    get products() {
        return $$(`-ios predicate string:name == "productDetails"`)
    }

    async openFirstProduct() {
        await browser.waitUntil(async () => {
            return (await this.products).length > 0
        }, { timeout: 20000 })

        const products = await this.products
        await products[0].click()
    }
}


export default new BrowsePage()