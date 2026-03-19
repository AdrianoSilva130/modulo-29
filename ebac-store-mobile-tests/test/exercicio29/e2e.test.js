import loginPage from '../pageobjects/login.page.js'
import homePage from '../pageobjects/home.page.js'
import browsePage from '../pageobjects/browse.page.js'
import productPage from '../pageobjects/product.page.js'
import cartPage from '../pageobjects/cart.page.js'
import checkoutPage from '../pageobjects/checkout.page.js'

describe('E2E - Compra de Produto', () => {

    it('deve logar, buscar produto e finalizar compra', async () => {

        // LOGIN
        await homePage.goToLogin()
        await loginPage.login('standard_user', 'secret_sauce')


        // BUSCA
        await homePage.openSearch()
        await browsePage.searchProduct('Jacket')

        // SELECIONAR PRODUTO
        await browsePage.selectFirstProduct()

        // ADICIONAR AO CARRINHO
        await productPage.addToCart()

        // CHECKOUT
        await cartPage.goToCheckout()
        await checkoutPage.finishCheckout()

    })

})