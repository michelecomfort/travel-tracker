import User from '../src/User'
import Trips from '../src/Trips'
import Destinations from '../src/Destinations'

export default class Session {
  constructor() {
    this.isLoggedIn = false;
    this.user
    this.allTripsData
    this.userTrips
    this.destinationData
  }

  retrieveUser(user) {
    console.log(user)
    this.user = new User({id: user.id, name: user.name, travelerType: user.travelerType})
    return this.user
  }

  createTripsStorage(tripsData) {
    let trips = tripsData.filter(trip => {
    return  trip.userID === this.user.id
  })
    this.userTrips = new Trips(trips)
    return this.userTrips
}

  createDestinationsStorage(destinationData) {
    return new Destinations(destinationData)
  }

}
