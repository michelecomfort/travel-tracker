import { traveler, trips, destinations } from '../src/sample-data'
import { assert } from 'chai'
import Destinations from '../src/Destinations'
import Session from '../src/Session'

describe('Destinations', function() {
  let destination1
  let session
  let destinationData

  beforeEach(function () {
    destination1 = new Destinations(destinations[0])
    session = new Session()
    destinationData = [
      {
        'id': 4,
        'destination': 'Cartagena, Colombia',
        'estimatedLodgingCostPerDay': 65,
        'estimatedFlightCostPerPerson': 350,
        'image': 'https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        'alt': 'boats at a dock during the day time'
      }]
  })

  it('should be a function', function() {
    assert.isFunction(Destinations)
  })

  it('should be an instance of Destinations', function() {
    assert.instanceOf(destination1, Destinations)
  })

  it('should calculate the total trip cost to return an estimate to a user', function() {
    session.createDestinationsStorage(destinationData)
    assert.equal(session.destinationObj.getTripCost('Cartagena, Colombia', 5, 2), 1127.50)
  })
})
