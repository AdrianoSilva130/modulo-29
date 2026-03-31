import { generalConf } from './general.conf.js'

const platform = process.env.PLATFORM || 'ios'

export let bsConf = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',
    port: 443,
    protocol: 'https',
    path: '/wd/hub',

    services: ['browserstack'],
    
    capabilities: platform === 'android' ? [
        {
            "platformName": 'Android',
            'appium:deviceName': 'Samsung Galaxy S22 Ultra',
            'appium:platformVersion': '12.0',
            'appium:automationName': 'UiAutomator2',
            'appium:app': 'bs://f4b3fe99df62db99befc1f5a6910b928399fee5c'
        },

    ] : [
        {
            "platformName": "ios",
            "appium:deviceName": "iPhone 15",
            "appium:platformVersion": "17",
            "appium:automationName": "XCUITest",
            "appium:app": "bs://eadcbb82054d4322cb43e32d7f879cfc9d5e3850"
        }
    ],

    commonCapabilities: {
        'bstack:options': {
            projectName: "BrowserStack EBAC",
            buildName: 'browserstack build',
            sessionName: `Test ${process.env.PLATFORM}`,
            //debug: true,
            //networkLogs: true,
            source: 'webdriverio:appium-sample-sdk:v1.0'
        }
    },
    maxInstances: 1,
    ...generalConf
}