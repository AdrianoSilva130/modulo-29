import { $, $$ } from '@wdio/globals'

class BrowsePage {

    get searchInput(){
        return $(`-ios class chain:**/XCUIElementTypeTextField`)
    }

    get products(){
        return $$(`-ios class chain:**/XCUIElementTypeCell`)
    }

    async searchProduct(nome){
        await this.searchInput.waitForDisplayed({ timeout: 10000 })
        await this.searchInput.setValue(nome)
        await browser.pause(3000) // aguarda resultados
    }

    async selectFirstProduct(){
        const produtos = await this.products
        await produtos[0].click()
    }
}

export default new BrowsePage()