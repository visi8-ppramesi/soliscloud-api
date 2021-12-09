import dotenv from 'dotenv'
import apiCaller from "./utils/caller.js"
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

export default Object.keys(apiParams).reduce((acc, apiName) => {
    acc[apiName] = (args) => {
        return apiCaller(args, apiParams[apiName]).then(res => res.data)
    }
    return acc
}, {})