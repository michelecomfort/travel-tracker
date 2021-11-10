import { traveler, trips, destinations } from '../src/sample-data'
import { assert } from 'chai'
import Session from '../src/Session'
import User from '../src/User'
import Trips from '../src/Trips'

describe('Session', function() {
  let user1
  let session
  let trip
  let tripsData

  beforeEach(function () {
    trip = new Trips(tripsData)
    session = new Session(tripsData)
    user1 = traveler[0]
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
    assert.isFunction(Session)
  })

  it('should be an instance of Session', function() {
    assert.instanceOf(session, Session)
  })
  //
  it('should have a method to create a new user', function() {
    assert.deepEqual(session.retrieveUser(user1), user1)
  })

  it('should have user start off as not logged in', function() {
    assert.equal(session.isLoggedIn, false)
  })

  it('should have a method to create a new instance of Trips', function() {
    assert.instanceOf(session.createTripsStorage(tripsData), Trips)
  })


})
