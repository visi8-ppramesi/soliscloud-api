import dotenv from 'dotenv'
import apiCaller from "./utils/caller.js"
import _ from 'lodash'

const env = dotenv.config().parsed

const apiParams = {
    userStationList: { path: '/v1/api/userStationList', params: [], optParams: ['pageNo', 'pageSize', 'userId'] }
}

export default {
    userStationList(args){
        return apiCaller(args, apiParams.userStationList).then(res => res.data)
    }
}