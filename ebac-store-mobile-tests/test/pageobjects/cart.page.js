import { $ } from '@wdio/globals'

class CartPage {

    get checkoutButton(){
        return $(`~Proceed To Checkout`)
    }

    async goToCheckout(){
        await this.checkoutButton.waitForDisplayed({ timeout: 10000 })
        await this.checkoutButton.click()
    }
}

export default new CartPage()