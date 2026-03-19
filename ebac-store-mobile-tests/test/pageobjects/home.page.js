import { $ } from '@wdio/globals'

class HomePage {

    get accountTab() {
        return $('~tab-Account')
    }

    async goToLogin() {
        const selector = '~tab-Account'

        await $(selector).waitForDisplayed({ timeout: 10000 })

        try {
            await $(selector).click()
        } catch (error) {
            // tenta de novo se der stale
            await $(selector).click()
        }
    }
}

export default new HomePage()