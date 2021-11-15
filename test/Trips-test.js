import { traveler, trips, destinations } from '../src/sample-data'
import { assert } from 'chai'
import Trips from '../src/Trips'
import User from '../src/User'
import Session from '../src/Session'

describe('Trips', function() {
  let tripsData
  let trip
  let trip1
  let todayDate
  let user1
  let session
  // let trip2
  // let trip3

  beforeEach(function () {
    trip = new Trips()
    trip1 = new Trips(trips[0])
    todayDate = new Date().toISOString().slice(0, 10).replaceAll('-', '/')
    user1 = user1 = new User(traveler[0])
    session = new Session()
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

  it('should get all user past trips', function() {
    session.retrieveUser(user1)
    session.createTripsStorage(tripsData)
    assert.deepEqual(session.userTripsObj.getPastTrips(todayDate), [{
      'id': 10,
      'userID': 1,
      'destinationID': 4,
      'travelers': 2,
      'date': '2018/10/10',
      'duration': 5,
      'status': 'approved',
      'suggestActivities': []
    }])
  })

  it('should get all user upcoming trips', function() {
    session.retrieveUser(user1)
    session.createTripsStorage(tripsData)
    assert.deepEqual(session.userTripsObj.getUpcomingTrips(todayDate), [{
        'id': 20,
        'userID': 1,
        'destinationID': 6,
        'travelers': 2,
        'date': '2022/05/04',
        'duration': 7,
        'status': 'approved',
        'suggestActivities': []
      }])
  })

  it('should get all user pending trips', function() {
    session.retrieveUser(user1)
    session.createTripsStorage(tripsData)
    assert.deepEqual(session.userTripsObj.getPendingTrips(), [{
        'id': 30,
        'userID': 1,
        'destinationID': 8,
        'travelers': 3,
        'date': '2021/12/01',
        'duration': 4,
        'status': 'pending',
        'suggestActivities': []
      }])
  })
})
