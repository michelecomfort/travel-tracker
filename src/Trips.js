
export default class Trips {
  constructor(trips) {
    this.trips = trips
    console.log("<><><>",this.trips)
    this.pastTrips = []
    this.futureTrips
    this.pendingTrips = []
  }

  getTripStatus() {
    this.userTripsData.forEach(trip => {
      if (trip.status === 'approved') {
        this.approvedTrips.push(trip)
       this.approvedTrips
        // console.log(this.approvedTrips)
      } else {
        this.pendingTrips.push(trip)
        // console.log(this.pendingTrips)
      }
    })
  }

  getTripData(item) {
    this.userTripData.map(trip => {
      return `trip[${item}]`
    })
  }



}
