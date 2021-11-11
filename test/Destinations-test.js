import { traveler, trips, destinations } from '../src/sample-data'
import { assert } from 'chai'
import Destinations from '../src/Destinations'

describe('Destinations', function() {
  let destinationsData
  let destination1

  beforeEach(function () {
    destination1 = new Destinations(destinations[0])
    destinationsData = [
      {
        'id': 4,
        'destination': 'Cartagena, Colombia',
        'estimatedLodgingCostPerDay': 65,
        'estimatedFlightCostPerPerson': 350,
        'image': 'https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        'alt': 'boats at a dock during the day time'
      },
      {
        'id': 6,
        'destination': 'Jakarta, Indonesia',
        'estimatedLodgingCostPerDay': 70,
        'estimatedFlightCostPerPerson': 890,
        'image': 'https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        'alt': 'lit up city at night'
      },
      {
        'id': 8,
        'destination': 'Tokyo, Japan',
        'estimatedLodgingCostPerDay': 125,
        'estimatedFlightCostPerPerson': 1000,
        'image': 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1971&q=80',
        'alt': 'city with people walking in crosswalk and brightly lit shops at night'
      },]
  })

  it('should be a function', function() {
    assert.isFunction(Destinations)
  })

  it('should be an instance of Destinations', function() {
    assert.instanceOf(destination1, Destinations)
  })
})
