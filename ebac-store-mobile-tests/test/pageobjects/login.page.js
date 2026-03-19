import { $ } from '@wdio/globals'

class LoginPage {

    get email(){
        return $('~email')
    }

    get password(){
        return $('~password')
    }

    get loginButton(){
        return $('~btnLogin')
    }

    async login(user, pass){
        await this.email.waitForDisplayed({ timeout: 15000 })

        await this.email.setValue(user)
        await this.password.setValue(pass)

        await this.loginButton.click()
    }
}

export default new LoginPage()