
export default class Trips {
  constructor(allTrips) {
    this.allTripsData = allTrips
    console.log('yoyo',allTrips)
  console.log('here2',this.allTripsData)
  }

  retrieveAllUserTrips(id) {
    const result =this.allTripsData.filter(trip => {
    return  trip.userID === id
    })
    return result
  }
}
