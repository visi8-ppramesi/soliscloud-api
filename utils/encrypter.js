import cryptoJs from "crypto-js"
import dotenv from 'dotenv'

const env = dotenv.config().parsed

const toHmacSha1 = (message, secretKey = null) => {
    const secret = secretKey ?? env.SOLIS_SECRET_KEY
    return cryptoJs.enc.Base64.stringify(cryptoJs.HmacSHA1(message, secret))
}

const createApiAuth = ({
    verb = 'POST', 
    contentMd5, 
    contentType = "application/json", 
    date = (new Date()).toGMTString(), 
    canonSource
}, keyId = null, secretKey = null) => {
    const authPreEncryptedText = [verb, contentMd5, contentType, date, canonSource].join('\n')
    const kid = keyId ?? env.SOLIS_KEY_ID
    const encryptedText = toHmacSha1(authPreEncryptedText, secretKey)
    return 'API ' + kid + ':' + encryptedText
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