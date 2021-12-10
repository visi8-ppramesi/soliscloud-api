import dotenv from 'dotenv'
import apiBuilder from './utils/builder.js'
import _ from 'lodash'

const env = dotenv.config().parsed

const apiParams = {
    userStationList: {
        name: 'Power Station List',
        path: '/v1/api/userStationList',
        requiredParams: [],
        optParams: ['pageNo', 'pageSize', 'userId'],
        pairedReqParams: [
            []
        ]
    },
    stationDetail: {
        name: 'Power Station Details',
        path: '/v1/api/stationDetail',
        requiredParams: ['id'],
        optParams: [],
        pairedReqParams: [
            []
        ]
    }
}

export default apiBuilder(apiParams)