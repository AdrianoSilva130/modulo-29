import { $ } from '@wdio/globals'

class ProductPage {

    async getProductTitle(name){
        return $(`~${name}`)
    }

    get addToCartButton(){
        return $('~addToCart')
    }

    async addToCart(){
        await this.addToCartButton.waitForDisplayed({ timeout: 15000 })
        await this.addToCartButton.click()
    }
}

export default new ProductPage()