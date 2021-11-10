
export default class Trips {
  constructor(allTrips) {
    this.allTrips = []
  }

  storeAllTripData(allTrips) {
    allTrips.forEach(trip => {
      this.allTrips.push(trip)
    })
    return this.allTrips
  }
}
