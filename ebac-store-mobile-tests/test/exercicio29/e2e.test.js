import loginPage from '../pageobjects/login.page.js'
import homePage from '../pageobjects/home.page.js'
import browsePage from '../pageobjects/browse.page.js'
import productPage from '../pageobjects/product.page.js'
import cartPage from '../pageobjects/cart.page.js'
import checkoutPage from '../pageobjects/checkout.page.js'

describe('E2E - Compra de Produto', () => {

    it('deve buscar produto e finalizar compra', async () => {

        // LOGIN
        let profileTab = driver.isAndroid ? 'profile' : 'Account'
        await homePage.openMenu(profileTab)
        await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')

        // AGUARDA VOLTAR PRA HOME
        await homePage.search()
        await browsePage.openFirstProduct()

        // ADD NO CARRINHO
        await productPage.addToCart()

        // IR PARA CARRINHO + CHECKOUT
        await cartPage.goToCart()
        await cartPage.checkout()

        // FINALIZAR
        await checkoutPage.finishCheckout()

    })

})