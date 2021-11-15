import User from '../src/User'
import Trips from '../src/Trips'
import Destinations from '../src/Destinations'

export default class Session {
  constructor() {
    this.user
    this.allTripsData
    this.userTripsObj
    this.userTripsData
    this.destinationObj
    this.destinationData
  }

  retrieveUser(user) {
    this.user = new User({id: user.id, name: user.name, travelerType: user.travelerType})
    console.log(this.user)
    return this.user
  }

  createTripsStorage(tripsData) {
    this.allTripsData = tripsData
    let trips = tripsData.filter(trip => {
    return  trip.userID === this.user.id
  })
    this.userTripsObj = new Trips(trips)
    this.userTripsData = this.userTripsObj.trips
    return this.userTripsData
  }

  createDestinationsStorage(destinationData) {
    this.destinationObj = new Destinations(destinationData)
    this.destinationData = this.destinationObj.destinations
    return this.destinationData
  }

}
