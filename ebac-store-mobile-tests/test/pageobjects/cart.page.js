import { $ } from '@wdio/globals'

class CartPage {

    get cartButton(){
        return $('~cart')
    }

    get checkoutButton(){
        return $('~checkout')
    }

    async goToCart(){
        await this.cartButton.waitForDisplayed({ timeout: 15000 })
        await this.cartButton.click()
    }

    async checkout(){
        await this.checkoutButton.waitForDisplayed({ timeout: 15000 })
        await this.checkoutButton.click()
    }
}

export default new CartPage()