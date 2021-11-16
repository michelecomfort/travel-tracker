export default class Destinations {
  constructor(destinationData) {
    this.destinations = destinationData
  }

  getTripCost(location, duration, guests) {
    let result = this.destinations.reduce((acc, destination) => {
      if (destination.destination === location) {
        acc += (destination.estimatedLodgingCostPerDay * duration) + (destination.estimatedFlightCostPerPerson * guests)
      }
      return acc
    }, 0)
    let agentFee = result * .1
    result += agentFee
    return result
  }
}
