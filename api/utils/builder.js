import apiCaller from "./caller.js"

export default (apiParams) => {
    return Object.keys(apiParams).reduce((acc, apiName) => {
        acc[apiName] = (args) => {
            return apiCaller(args, apiParams[apiName]).then(res => res.data)
        }
        return acc
    }, {})
}