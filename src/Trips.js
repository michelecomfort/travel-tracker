
export default class Trips {
  constructor(allTrips) {
    this.allTripsData= allTrips


  }

  retrieveAllUserTrips(id) {
    // console.log(this.allTripsData)
    this.allTripsData.filter(trip => {
    return  trip.userID === id
    })

  }
}
