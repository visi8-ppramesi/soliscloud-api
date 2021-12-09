import _ from 'lodash'

const loadModule = async (name) => {
    return await import("./api/" + name + '.js')
}

const modules = [
    'station',
    'alarm',
    'collector',
    'inverter',
    'user'
].reduce((acc, mod) => {
    acc[mod] = loadModule(mod)
    return acc
}, {})

export default modules