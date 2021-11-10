import User from '../src/User'

export default class Session {
  constructor(userData, tripsData) {
    this.isLoggedIn = false
    this.allTripsData = tripsData
    this.user;
  }

  retrieveUser(user) {
    return this.user = new User({id: user.id, name: user.name, travelerType: user.travelerType})
  }

}
