import { $, $$ } from '@wdio/globals'

class BrowsePage {

    get searchInput(){
        return $(`-ios predicate string:name == "searchInput"`)
    }

    get products(){
        return $$(`-ios predicate string:name == "productDetails"`)
    }

    async openFirstProduct(){
        // espera lista aparecer
        await browser.waitUntil(async () => {
            const items = await this.products
            return items.length > 0
        }, {
            timeout: 10000,
            timeoutMsg: 'Produtos não carregaram'
        })

        const products = await this.products
        await products[0].click()
    }
}


export default new BrowsePage()