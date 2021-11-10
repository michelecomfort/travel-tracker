
export default class User {
  constructor(traveler) {
    console.log(traveler.id)
    this.id = traveler.id,
    this.name = traveler.name,
    this.travelerType = traveler.travelerType
    // this.pastTrips = []
    // this.presentTrips = []
    // this.futureTrips = []
  }

  returnFirstName() {
    return this.name.split(' ')[0]
  }

  getPastTrips() {

  }

  // getPresentTrips() {
  //
  // }
  //
  // getFutureTrips() {
  //
  // }
}
