import assert from 'assert'
import station from '../api/station.js'

describe('Api', function() {
    describe('station', function() {
        it('calling userStationList', async function() {
            const response = await station.userStationList({})
            assert.equal(response.success, true)
        })
    })
})