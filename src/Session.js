import User from '../src/User'
import Trips from '../src/Trips'

export default class Session {
  constructor(userData, tripsData, destinationData) {
    this.isLoggedIn = false
    this.user;
  }

  retrieveUser(user) {
    return this.user = new User({id: user.id, name: user.name, travelerType: user.travelerType})
  }

  createTripsStorage(tripsData) {
    let trips = new Trips(tripsData)
    return trips
  }

}
