import dotenv from 'dotenv'
import apiBuilder from './utils/builder.js'
import _ from 'lodash'

const env = dotenv.config().parsed

const apiParams = {
    inverterList: {
        name: 'Inverter List',
        path: '/v1/api/inveterList',
        requiredParams: [],
        optParams: ['pageNo', 'pageSize', 'stationId'],
        pairedReqParams: [
            []
        ]
    },
    inverterDetail: {
        name: 'Inverter Details',
        path: '/v1/api/inveterDetail',
        requiredParams: [],
        optParams: [''],
        pairedReqParams: [
            ['id', 'sn']
        ]
    },
    inverterDay: {
        name: 'Inverter Daily Graph',
        path: '/v1/api/inverterDay',
        requiredParams: ['money', 'time', 'timeZone'],
        optParams: [],
        pairedReqParams: [
            ['id', 'sn']
        ]
    },
    inverterMonth: {
        name: 'Inverter Monthly Graph',
        path: '/v1/api/inverterMonth',
        requiredParams: ['money', 'month'],
        optParams: [],
        pairedReqParams: [
            ['id', 'sn']
        ]
    },
    inverterYear: {
        name: 'Inverter yearly Graph',
        path: '/v1/api/inverterYear',
        requiredParams: ['money', 'year'],
        optParams: [],
        pairedReqParams: [
            ['id', 'sn']
        ]
    },
    inverterAll: {
        name: 'Inverter Cumulative Graph',
        path: '/v1/api/inverterAll',
        requiredParams: ['money'],
        optParams: [],
        pairedReqParams: [
            ['id', 'sn']
        ]
    },
    inverterDetailList: {
        name: 'Batch Acquire Inverter Details',
        path: '/v1/api/inverterDetailList',
        requiredParams: [],
        optParams: ['pageNo', 'pageSize'],
        pairedReqParams: [
            []
        ]
    },
}

export const inverterConfig = {
    apiParams
}

export default apiBuilder(apiParams)