import { traveler } from '../src/sample-data'
import { assert } from 'chai'
import Session from '../src/Session'
import Trips from '../src/Trips'
import Destinations from '../src/Destinations'

describe('Session', function() {
  let session
  let user1
  let tripsData
  let destinationData

  beforeEach(function () {
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
    },
  ]

    destinationData = [{
      'id': 4,
      'destination': 'Cartagena, Colombia',
      'estimatedLodgingCostPerDay': 65,
      'estimatedFlightCostPerPerson': 350,
      'image': 'https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      'alt': 'boats at a dock during the day time'
    }]
  })

  it('should be a function', function() {
    assert.isFunction(Session)
  })

  it('should be an instance of Session', function() {
    assert.instanceOf(session, Session)
  })

  it('should have a method to create a new user', function() {
    assert.deepEqual(session.retrieveUser(user1), user1)
  })

  it('should have a method to create a new instance of Trips', function() {
    session.retrieveUser(user1)
    assert.deepEqual(session.createTripsStorage(tripsData), tripsData)
    assert.instanceOf(session.userTripsObj, Trips)
  })

  it('should have a method to create a new instance of Destinations', function() {
    assert.deepEqual(session.createDestinationsStorage(destinationData), destinationData)
    assert.instanceOf(session.destinationObj, Destinations)
  })


})
