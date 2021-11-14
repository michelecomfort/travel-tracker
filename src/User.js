
export default class User {
  constructor(traveler) {
    this.id = traveler.id,
    this.name = traveler.name,
    this.travelerType = traveler.travelerType
  }

  returnFirstName() {
    return this.name.split(' ')[0]
  }

  getTotalDollarSpentThisYear(session) {
    let result = session.userTripsData.reduce((acc, trip) => {
      if(trip.date.includes('2021')) {
        session.destinationData.filter(dest => {
          if (trip.destinationID === dest.id) {
            acc += (trip.travelers * dest.estimatedFlightCostPerPerson) + (trip.duration * dest.estimatedLodgingCostPerDay)
          }
        })
      }
      return acc
    }, 0)
    return result
  }

}
