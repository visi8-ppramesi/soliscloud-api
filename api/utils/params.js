import encrypter from "../../utils/encrypter.js"

export default {
    processParams(params, path){
        const date = (new Date()).toGMTString()
        const md5Data = encrypter.toMd5(params)
        const apiAuth = encrypter.createApiAuth({
            contentMd5: md5Data,
            canonSource: path,
            date: date
        })

        return { date, md5Data, apiAuth }
    }
}