import { traveler, trips, destinations } from '../src/sample-data'
import { assert } from 'chai'
import User from '../src/User'

describe('User', function() {
  let user1
  let user2
  let user3

  beforeEach(function () {
    user1 = new User(traveler[0])
    user2 = new User(traveler[1])
    user3 = new User(traveler[2])
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

})
