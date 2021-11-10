import User from '../src/User'
import Trips from '../src/Trips'

export default class Session {
  constructor(userData, tripsData) {
    this.isLoggedIn = false
    this.allTripsData = []
    this.user;
  }

  retrieveUser(user) {
    return this.user = new User({id: user.id, name: user.name, travelerType: user.travelerType})
  }

  storeAllTripData(trips) {
    trips.forEach(trip => {
      this.allTripsData.push(trip)
    })
    return this.allTripsData
  }

  createTripsStorage(trips) {
    return trips = new Trips(trips)
  }

}
