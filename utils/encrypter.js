import cryptoJs from "crypto-js"
import dotenv from 'dotenv'

const env = dotenv.config().parsed

const toHmacSha1 = (message) => {
    return cryptoJs.enc.Base64.stringify(cryptoJs.HmacSHA1(message, env.SOLIS_SECRET_KEY))
}

const createApiAuth = ({verb = 'POST', contentMd5, contentType = "application/json", date = (new Date()).toGMTString(), canonSource}) => {
    const authPreEncryptedText = [verb, contentMd5, contentType, date, canonSource].join('\n')
    const encryptedText = toHmacSha1(authPreEncryptedText)
    return 'API ' + env.SOLIS_KEY_ID + ':' + encryptedText
}

const toMd5 = (text) => {
    if(typeof text == 'object'){
        text = JSON.stringify(text)
    }
    return cryptoJs.enc.Base64.stringify(cryptoJs.MD5(text))
}

export default {
    toHmacSha1,
    createApiAuth,
    toMd5
}