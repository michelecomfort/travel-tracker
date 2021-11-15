
export default class Trips {
  constructor(trips) {
    this.trips = trips
    this.pastTrips = []
    this.futureTrips
    this.pendingTrips = []
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

  // getTripCost(session, location, duration, guests) {
  //   let result = session.destinationData.reduce((acc, destination) => {
  //     if (destination.destination === location){
  //     acc += (destination.estimatedLodgingCostPerDay * duration) + (destination.estimatedFlightCostPerPerson * guests)
  //     }
  //     return acc
  //   }, 0)
  //   let agentFee = result * .1
  //   result += agentFee
  //   return result
  // }



}
