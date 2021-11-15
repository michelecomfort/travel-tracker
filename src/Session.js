import User from '../src/User'
import Trips from '../src/Trips'
import Destinations from '../src/Destinations'

export default class Session {
  constructor() {
    this.isLoggedIn = false;
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

  // getUpcomingTrips(todayDate) {
  //   let date1 = new Date(todayDate)
  //   let result = this.userTripsData.filter(trip => {
  //     let date2 = new Date(trip.date)
  //     if (date2 > date1  && trip.status === 'approved') {
  //       return trip
  //     }
  //   })
  //   return result
  // }

  getPendingTrips() {
    let result = this.userTripsData.filter(trip => {
      return trip.status ==='pending'
    })
      return result
  }

}
