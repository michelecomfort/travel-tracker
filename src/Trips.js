
export default class Trips {
  constructor(trips) {
    this.userTripData= trips
    this.approvedTrips = []
    this.pendingTrips = []
  }

  getPendingTrips() {
    this.userTripsData.forEach(trip => {
      if (trip.status === 'approved') {
        this.approvedTrips.push(trip)
      } else {
        this.pendingTrips.push(trip)
      }
    })
  }

}
