export const config = {
    // runner: 'local',
    // port: 4723,

    user: 'oauth-adrianosilva130-6c810',
    key: 'fc272c74-49e9-4499-bc8b-d4152090715a',
    protocol: 'https',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    path: '/wd/hub',

    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [


        {
            "platformName": 'iOS',
            "appium:deviceName": 'iPhone 15 Simulator',
            "appium:platformVersion": '17.2',
            "appium:automationName": 'XCUITest',
            'appium:app': 'storage:filename=LojaEBAC-sim.app',

            'sauce:options': {
            build: 'EBAC Mobile Tests',
            name: 'Testes iOS EBAC'

        },
}],
    logLevel: 'info',

    framework: 'mocha',

    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        await driver.takeScreenshot();
    }
}
