export const config = {

    user: 'oauth-joadrito02-0231d',
    key: '317b3c6f-aea9-4248-9e81-7dadbe53fde4',

    protocol: 'https',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    path: '/wd/hub',

    runner: 'local',
    specs: ['./test/specs/**/*.js'],

    suites: {
        login: ['./test/specs/login.test.js'],
        product: ['./test/specs/product.test.js'],
        search: ['./test/specs/search.test.js'],

        //exercicio29
        e2e: ['./test/exercicio29/e2e.test.js'],
    },

    maxInstances: 1,

    capabilities: [{
        platformName: 'iOS',
        'appium:deviceName': 'iPhone 14 Simulator',
        'appium:platformVersion': '16.0',
        'appium:automationName': 'XCUITest',
        'appium:app': 'storage:filename=LojaEBAC-sim.zip',

        'sauce:options': {
            build: 'EBAC Mobile Tests',
            name: 'Testes iOS EBAC',
            appiumVersion: '2.0.0'
        }
    }],

    logLevel: 'info',
    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },

    // afterSuite: async function () {
    afterTest: async function (test, context, { error, result, duration, passed }) {
        await driver.takeScreenshot();
        await driver.execute('mobile: terminateApp', { bundleId: 'br.com.lojaebac' })
    },

    //beforeSuite:(async function () {
    beforeTest: (async function () {
        let state = await driver.queryAppState("br.com.lojaebac")
        if (state !== 4) {
            await driver.execute('mobile: lauchApp', { bundleId: 'br.com.lojaebac' })
        }
    }),
}