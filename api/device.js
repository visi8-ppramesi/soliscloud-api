import dotenv from 'dotenv'
import apiBuilder from './utils/builder.js'
import _ from 'lodash'

const env = dotenv.config().parsed

const apiParams = {
    addDevice: {
        name: 'Add Device',
        path: '/v1/api/addDevice',
        requiredParams: [],
        optParams: [],
        pairedReqParams: [
            ['id', 'sn']
        ]
    },
}

export const deviceConfig = {
    apiParams
}

export default apiBuilder(apiParams)