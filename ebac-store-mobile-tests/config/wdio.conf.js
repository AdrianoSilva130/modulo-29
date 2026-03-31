import { localConf } from './local.conf.js'
import { sauceConf } from './sauce.conf.js'

import 'dotenv/config';

function getConfig() {
    const env = process.env.ENVIRONMENT || 'saucelabs' // default

    switch (env) {
        case 'local':
            return localConf
        case 'saucelabs':
            return sauceConf
        default:
            throw new Error(
                `ENVIRONMENT inválido: ${env}. Use "local" ou "saucelabs"`
            )
    }
}

export const config = getConfig()