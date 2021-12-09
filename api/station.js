import dotenv from 'dotenv'
import apiBuilder from './utils/builder.js'
import _ from 'lodash'

const env = dotenv.config().parsed

const apiParams = {
    userStationList: {
        path: '/v1/api/userStationList',
        requiredParams: [],
        optParams: ['pageNo', 'pageSize', 'userId'],
        pairedReqParams: [
            []
        ]
    }
}

export default apiBuilder(apiParams)