
export default class Trips {
  constructor(trips) {
    this.trips = trips
  }

  getTripStatus() {
    this.userTripsData.forEach(trip => {
      if (trip.status === 'approved') {
        this.approvedTrips.push(trip)
       this.approvedTrips
      } else {
        this.pendingTrips.push(trip)
      }
    })
  }

  getTripData(item) {
    this.userTripData.map(trip => {
      return `trip[${item}]`
    })
  }

  getPastTrips(todayDate) {
    let date1 = new Date(todayDate)
    let result = this.trips.filter(trip => {
      let date2 = new Date(trip.date)
      if (date2 < date1  && trip.status === 'approved') {
        return trip
      }
    })
    return result
  }

  getUpcomingTrips(todayDate) {
    let date1 = new Date(todayDate)
    let result = this.trips.filter(trip => {
      let date2 = new Date(trip.date)
      if (date2 > date1  && trip.status === 'approved') {
        return trip
      }
    })
    return result
  }

  getPendingTrips() {
    let result = this.trips.filter(trip => {
      return trip.status ==='pending'
    })
      return result
  }
}
