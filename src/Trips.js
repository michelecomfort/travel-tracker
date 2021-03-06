
export default class Trips {
  constructor(trips) {
    this.trips = trips
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
      return trip.status === 'pending'
    })
    return result
  }
}
