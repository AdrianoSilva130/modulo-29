import { $ } from '@wdio/globals'

class CheckoutPage {

    get placeOrderButton(){
        return $(`~Place Order`)
    }

    async finishCheckout(){
        await this.placeOrderButton.waitForDisplayed({ timeout: 10000 })
        await this.placeOrderButton.click()
    }
}

export default new CheckoutPage()