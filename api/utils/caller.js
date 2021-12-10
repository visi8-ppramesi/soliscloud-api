import axios from "axios"
import paramsUtils from "./params.js"
import _ from 'lodash'
import dotenv from 'dotenv'

const env = dotenv.config().parsed
const baseUrl = new URL(env.SOLIS_BASE_URL)

const parseParams = (args, apiParams) => {
    const params = {}

    if(apiParams.optParams.length > 0){
        apiParams.optParams.forEach((optKey) => {
            if(args[optKey]){
                params[optKey] = args[optKey]
            }
        })
    }

    if(apiParams.requiredParams.length > 0){
        apiParams.requiredParams.forEach((reqKey) => {
            if(!args[reqKey]) throw 'error'
            params[reqKey] = args[reqKey]
        })
    }

    if(apiParams.pairedReqParams.length > 0){
        apiParams.pairedReqParams.forEach((reqKeys) => {
            let found = false
            if(reqKeys.length > 0){
                reqKeys.forEach((reqKey) => {
                    if(args[reqKey]){
                        found = true
                        params[reqKey] = args[reqKey]
                    }
                })
            }else{
                found = true
            }
            if(!found) throw 'error'
        })
    }

    return params
}

export default function apiCaller(args, apiParams){
    const path = apiParams.path
    const params = parseParams(args, apiParams)

    baseUrl.pathname = path
    const url = baseUrl.toString()
    const processedParams = paramsUtils.processParams(params, path)

    return axios.post(url, params, {
        headers: {
            'Content-MD5': processedParams.md5Data,
            Authorization: processedParams.apiAuth,
            date: processedParams.date
        }
    })
}

export function boundApiCaller(args, apiParams, keyId, secretKey){
    const path = apiParams.path
    const params = parseParams(args, apiParams)

    baseUrl.pathname = path
    const url = baseUrl.toString()
    const processedParams = paramsUtils.processParams(params, path, keyId, secretKey)

    return axios.post(url, params, {
        headers: {
            'Content-MD5': processedParams.md5Data,
            Authorization: processedParams.apiAuth,
            date: processedParams.date
        }
    })
}