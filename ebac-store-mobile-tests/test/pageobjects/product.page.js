import { $ } from '@wdio/globals'

class ProductPage {

    get addToCartButton(){
        return $(`~Add To Cart`)
    }

    async addToCart(){
        await this.addToCartButton.waitForDisplayed({ timeout: 10000 })
        await this.addToCartButton.click()
    }
}

export default new ProductPage()