import dotenv from 'dotenv'
import apiBuilder from './utils/builder.js'
import _ from 'lodash'

const env = dotenv.config().parsed

const apiParams = {
    collectorList: {
        name: 'Datalogger List',
        path: '/v1/api/collectorList',
        requiredParams: [],
        optParams: ['pageNo', 'pageSize', 'stationId'],
        pairedReqParams: [
            []
        ]
    },
    collectorDetail: {
        name: 'Datalogger Details',
        path: '/v1/api/collectorDetail',
        requiredParams: [],
        optParams: [''],
        pairedReqParams: [
            ['id', 'sn']
        ]
    },
    addStationBindCollector_newPlant: {
        name: 'New Plant to Bind Collector',
        path: '/v1/api/addStationBindCollector',
        requiredParams: ['stationName', 'addr', 'capacity', 'picName', 'latitude', 'longitude', 'dip', 'azimuth', 'money', 'country', 'price', 'gdAreaCode', 'offset', 'type', 'contribution', 'synchronizationType', 'installTime', 'module', 'mobile', 'installerEmail', 'installerMobile'],
        optParams: ['userId', 'region', 'city'],
        pairedReqParams: [
            ['id', 'sn']
        ]
    },
    addStationBindCollector_plantExist: {
        name: 'Bind Collector Plant Exist',
        path: '/v1/api/addStationBindCollector',
        requiredParams: ['stationId', 'sn'],
        optParams: [],
        pairedReqParams: [
            []
        ]
    },
    delCollector: {
        name: 'Plant Unbind Datalogger',
        path: '/v1/api/delCollector',
        requiredParams: ['sn', 'deleteInvert'],
        optParams: [],
        pairedReqParams: [
            []
        ]
    },
}

export const collectorConfig = {
    apiParams
}

export default apiBuilder(apiParams)