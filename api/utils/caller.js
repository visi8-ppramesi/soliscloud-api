import axios from "axios"
import paramsUtils from "../../utils/params.js"
import _ from 'lodash'
import dotenv from 'dotenv'

const env = dotenv.config().parsed
const baseUrl = new URL(env.SOLIS_BASE_URL)

const apiCaller = (args, apiParams) => {
    const path = apiParams.path
    const params = {}

    if(apiParams.optParams.length > 0){
        const optParams = apiParams.optParams
        optParams.forEach((optKey) => {
            if(args[optKey]){
                params[optKey] = args[optKey]
            }
        })
    }
    if(apiParams.params.length > 0){
        const wajibParams = apiParams.params
        wajibParams.forEach((wajibKey) => {
            if(!args[wajibKey]) throw 'error'
            params[wajibKey] = args[wajibKey]
        })
    }

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

export default apiCaller