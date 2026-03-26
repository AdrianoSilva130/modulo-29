import { $ } from '@wdio/globals'

class CheckoutPage {

    get finishButton(){
        return $('~finish')
    }

    async finish(){
        await this.finishButton.waitForDisplayed({ timeout: 15000 })
        await this.finishButton.click()
    }
}

export default new CheckoutPage()