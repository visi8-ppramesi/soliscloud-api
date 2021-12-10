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
    },
    addStation: {
        name: 'New Plant',
        path: '/v1/api/addStation',
        requiredParams: ['inverterSN', 'stationName', 'addr', 'userId', 'mobile', 'capacity', 'price'],
        optParams: ['picName', 'latitude', 'longitude', 'dip', 'azimuth', 'money', 'country', 'region', 'city', 'gdAreaCode', 'offset', 'module', 'mobile', 'installerEmail', 'installerMobile'],
        pairedReqParams: [
            []
        ]
    },
    stationDay: {
        name: 'Plant Daily Graph',
        path: '/v1/api/stationDay',
        requiredParams: ['id', 'money', 'time', 'timeZone'],
        optParams: [],
        pairedReqParams: [
            []
        ]
    },
    stationMonth: {
        name: 'Plant Monthly Graph',
        path: '/v1/api/stationMonth',
        requiredParams: ['id', 'money', 'month'],
        optParams: [],
        pairedReqParams: [
            []
        ]
    },
    stationYear: {
        name: 'Plant Yearly Graph',
        path: '/v1/api/stationYear',
        requiredParams: ['id', 'money', 'year'],
        optParams: [],
        pairedReqParams: [
            []
        ]
    },
    stationAll: {
        name: 'Plant Cumulative Graph',
        path: '/v1/api/stationAll',
        requiredParams: ['id', 'money'],
        optParams: [],
        pairedReqParams: [
            []
        ]
    },
    stationUpdate: {
        name: 'Plant Modification',
        path: '/v1/api/stationUpdate',
        requiredParams: ['stationName', 'addr', 'mobile', 'capacity', 'latitude', 'longitude', 'dip', 'azimuth', 'money', 'country', 'region', 'city', 'price', 'gdAreaCode', 'module', 'mobile', 'installerEmail', 'installerMobile'],
        optParams: [],
        pairedReqParams: [
            []
        ]
    },
    stationDetailList: {
        name: 'Batch Aquire Plant Details',
        path: '/v1/api/stationDetailList',
        requiredParams: [],
        optParams: ['pageNo', 'pageSize'],
        pairedReqParams: [
            []
        ]
    },
    stationDayEnergyList: {
        name: 'Batch Acquire Plant Day Generation',
        path: '/v1/api/stationDayEnergyList',
        requiredParams: ['time'],
        optParams: ['pageNo', 'pageSize'],
        pairedReqParams: [
            []
        ]
    },
    stationMonthEnergyList: {
        name: 'Batch Acquire Plant Month Generation',
        path: '/v1/api/stationMonthEnergyList',
        requiredParams: ['time'],
        optParams: ['pageNo', 'pageSize'],
        pairedReqParams: [
            []
        ]
    },
    stationYearEnergyList: {
        name: 'Batch Acquire Plant Year Generation',
        path: '/v1/api/stationYearEnergyList',
        requiredParams: ['time'],
        optParams: ['pageNo', 'pageSize'],
        pairedReqParams: [
            []
        ]
    },
}

export const stationConfig = {
    apiParams
}

export default apiBuilder(apiParams)