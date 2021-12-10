import dotenv from 'dotenv'
import apiBuilder from './utils/builder.js'
import _ from 'lodash'

const env = dotenv.config().parsed

const apiParams = {
    addUser: {
        name: 'New User',
        path: '/v1/api/addUser',
        requiredParams: ['username', 'password'],
        optParams: ['email', 'mobile', 'userType'],
        pairedReqParams: [
            []
        ]
    },
}

export default apiBuilder(apiParams)