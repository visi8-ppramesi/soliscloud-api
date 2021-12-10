import { boundBuilder } from './utils/builder.js'
import { stationConfig } from './station.js'
import { alarmConfig } from './alarm.js'
import { collectorConfig } from './collector.js'
import { inverterConfig } from './inverter.js'
import { userConfig } from './user.js'

const params = {
    station: stationConfig.apiParams,
    alarm: alarmConfig.apiParams,
    collector: collectorConfig.apiParams,
    inverter: inverterConfig.apiParams,
    user: userConfig.apiParams
}

class SolisApi{
    constructor(){
        this.keyId = null
        this.secretKey = null
    }

    initializeKeys(keyId, secretKey){
        this.keyId = keyId
        this.secretKey = secretKey
    }

    addApiRouteGroup(name, group){
        Object.defineProperty(this, name, {
            value: group
        })
    }

    addBuilder(builder){
        Object.defineProperty(this, 'builder', {
            value: builder.bind(this)
        })
    }

    static factory(){
        const instance = new SolisApi()
        instance.addBuilder(boundBuilder)
        Object.keys(params).forEach((apiGroup) => {
            const apiGroupFunctions = instance.builder(params[apiGroup])
            instance.addApiRouteGroup(apiGroup, apiGroupFunctions)
        })

        return instance
    }
}

export default SolisApi