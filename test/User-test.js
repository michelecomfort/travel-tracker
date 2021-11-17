import { traveler } from '../src/sample-data'
import { assert } from 'chai'
import User from '../src/User'
import Session from '../src/Session'

describe('User', function() {
  let user1
  let user2
  let session
  let trip
  let destination

  beforeEach(function () {
    user1 = new User(traveler[0])
    user2 = new User(traveler[1])
    session = new Session()
    trip = [{
      'id': 10,
      'userID': 1,
      'destinationID': 4,
      'travelers': 2,
      'date': '2021/10/10',
      'duration': 5,
      'status': 'approved',
      'suggestActivities': []
    }]

    destination = [{
      'id': 4,
      'destination': 'Cartagena, Colombia',
      'estimatedLodgingCostPerDay': 65,
      'estimatedFlightCostPerPerson': 350,
      'image': 'https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      'alt': 'boats at a dock during the day time'
    }]
  })

  it('should be a function', function() {
    assert.isFunction(User)
  })

  it('should be an instance of User', function() {
    assert.instanceOf(user1, User)
  })

  it('should have single user data', function() {
    assert.equal(user1.id, 1)
    assert.equal(user1.name, 'Michele Comfort')
    assert.equal(user1.travelerType, 'foodie')
  })

  it('should return the users first name', function() {
    assert.equal(user2.returnFirstName(), 'Trent');
  })

  it('should return dollar amount spent on trips for the current year', function() {
    session.retrieveUser(user1)
    session.createTripsStorage(trip)
    session.createDestinationsStorage(destination)
    assert.equal(user1.getTotalDollarSpentThisYear(session), '1025')
  })

})
