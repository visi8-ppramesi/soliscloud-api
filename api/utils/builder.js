import apiCaller, { boundApiCaller } from "./caller.js"

export default (apiParams) => {
    return Object.keys(apiParams).reduce((acc, apiName) => {
        acc[apiName] = function(args){
            return apiCaller(args, apiParams[apiName]).then(res => res.data)
        }
        return acc
    }, {})
}

export function boundBuilder(apiParams){
    const self = this
    return Object.keys(apiParams).reduce((acc, apiName) => {
        acc[apiName] = function(args){
            return boundApiCaller(args, apiParams[apiName], this.keyId, this.secretKey).then(res => res.data)
        }.bind(self)
        return acc
    }, {})
}