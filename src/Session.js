import User from '../src/User'
import Trips from '../src/Trips'
import Destinations from '../src/Destinations'

export default class Session {
  constructor() {
    this.user
    this.allTripsData
    this.userTrips
    this.destinationData
  }

  retrieveUser(user) {
    console.log(user)
    return this.user = new User({id: user.id, name: user.name, travelerType: user.travelerType})
  }

  createTripsStorage(tripsData) {
    let trips = tripsData.filter(trip => {
    return  trip.userID === this.user.id
  })
    this.userTrips = new Trips(trips)
}

  createDestinationsStorage(destinationData) {
    return new Destinations(destinationData)
  }

}
