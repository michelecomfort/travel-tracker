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
    console.log(user)
    this.user = new User({id: user.id, name: user.name, travelerType: user.travelerType})
    return this.user
  }

  createTripsStorage(tripsData) {
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

  getTotalDollarSpentThisYear() {
    let result = this.userTripsData.reduce((acc, trip) => {
      if(trip.date.includes('2021')) {
        this.destinationData.filter(dest => {
          if (trip.destinationID === dest.id) {
            acc += (trip.travelers * dest.estimatedFlightCostPerPerson) + (trip.duration * dest.estimatedLodgingCostPerDay)
          }
        })
      }
      return acc
    }, 0)
    console.log('here',result)
    return result
  }

  getTripCost(location, duration, guests) {
    let result = this.destinationData.reduce((acc, destination) => {
      if (destination.destination === location){
      acc += (destination.estimatedLodgingCostPerDay * duration) + (destination.estimatedFlightCostPerPerson * guests)
      }
      return acc
    }, 0)
    let agentFee = result * .1
    result += agentFee
    return result
  }

  getPastTrips(todayDate) {
    console.log('here here')
    let date1 = new Date(todayDate)
    let result = this.userTripsData.filter(trip => {
      let date2 = new Date(trip.date)
      if (date2 < date1  && trip.status === 'approved') {
        return trip
      }
    })
    console.log('hello',result)
    return result
  }

  getUpcomingTrips(todayDate) {
    let date1 = new Date(todayDate)
    let result = this.userTripsData.filter(trip => {
      let date2 = new Date(trip.date)
      if (date2 > date1  && trip.status === 'approved') {
        return trip
      }
    })
    console.log(result)
    return result
  }

  getPendingTrips() {
    let result = this.userTripsData.filter(trip => {
      return trip.status ==='pending'
    })
      return result
  }

}
