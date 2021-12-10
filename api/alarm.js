import dotenv from 'dotenv'
import apiBuilder from './utils/builder.js'
import _ from 'lodash'

const env = dotenv.config().parsed

const apiParams = {
    alarmList: {
        name: 'Alarm Info Check',
        path: '/v1/api/alarmList',
        requiredParams: [],
        optParams: ['pageNo', 'pageSize', 'stationId', 'alarmDeviceSn', 'alarmBeginTime', 'alarmEndTime'],
        pairedReqParams: [
            []
        ]
    },
}

export const alarmConfig = {
    apiParams
}

export default apiBuilder(apiParams)