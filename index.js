import _ from 'lodash'
import SolisApi from "./api/SolisApi.js"
import station from './api/station.js'
import alarm from './api/alarm.js'
import collector from './api/collector.js'
import inverter from './api/inverter.js'
import user from './api/user.js'

export const modules = {
    station,
    alarm,
    collector,
    inverter,
    user
}

export default SolisApi