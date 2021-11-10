import { traveler, trips, destinations } from '../src/sample-data'
import { assert } from 'chai'
import Trips from '../src/Trips'

describe('Trips', function() {
  let tripsData
  let trip
  let trip1
  // let trip2
  // let trip3

  beforeEach(function () {
    trip = new Trips()
    trip1 = new Trips(trips[0])
    // trip2 = new Trips(trips[1])
    // trip3 = new Trips(trips[2])
    tripsData = [{
      'id': 10,
      'userID': 1,
      'destinationID': 4,
      'travelers': 2,
      'date': '2018/10/10',
      'duration': 5,
      'status': 'approved',
      'suggestActivities': []
    },
    {
      'id': 30,
      'userID': 1,
      'destinationID': 8,
      'travelers': 3,
      'date': '2021/12/01',
      'duration': 4,
      'status': 'pending',
      'suggestActivities': []
    },
    {
      'id': 20,
      'userID': 1,
      'destinationID': 6,
      'travelers': 2,
      'date': '2022/05/04',
      'duration': 7,
      'status': 'approved',
      'suggestActivities': []
    },]
  })

  it('should be a function', function() {
    assert.isFunction(Trips)
  })

  it('should be an instance of Trips', function() {
    assert.instanceOf(trip1, Trips)
  })

  it('should have a method to store all user trips', function() {
    assert.deepEqual(trip.storeAllTripData(tripsData), tripsData)
  })
})
  // it('should have single user data', function() {
  //   assert.equal(user1.id, 1)
  //   assert.equal(user1.name, 'Michele Comfort')
  //   assert.equal(user1.travelerType, 'foodie')
  // })
  //
  // it('should return the users first name', function() {
  //   assert.equal(user2.returnFirstName(), 'Trent');
  // })
