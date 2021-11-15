// import { postData } from './fetch';
//
const tripView = document.querySelector('#tripView')
const todayDate = new Date().toISOString().slice(0, 10).replaceAll('-', '/')
const destinationsSection = document.querySelector('#destinations')
const bottomHeading = document.querySelector('#bottomHeading')

const changeFormView = (session) => {
  switch (tripView.value) {
  case 'past':
    let past = session.userTripsObj.getPastTrips(todayDate)
    displayTrips(session, past, tripView.value)
    break;
  case 'upcoming':
    let upcoming = session.userTripsObj.getUpcomingTrips(todayDate)
    displayTrips(session, upcoming, tripView.value)
    break;
  case 'pending':
    let pending = session.userTripsObj.getPendingTrips()
    displayTrips(session, pending, tripView.value)
    break;
  case 'expenses':
    let expenses = session.user.getTotalDollarSpentThisYear(session)
    console.log('hello there')
    displayExpenses(expenses)
    break;
  default:
    console.log('something went wrong');
    break;
  }
}

const displayTrips = (session, trips, value) => {
  if (trips.length > 0) {
    bottomHeading.innerHTML =
    '<h2>my ' + value + ' trips</h2>'
    destinationsSection.innerHTML = ''
    trips.forEach(trip => {
      session.destinationData.forEach(dest => {
        if (trip.destinationID === dest.id) {
          destinationsSection.innerHTML += `
          <section class='trips-display'>
          <h4>${dest.destination}</h4>
          <p>${trip.date}</p>
          </section>  `
        }
      })
    })
  } else {
    bottomHeading.innerHTML = '<p>You have no ' + value + ' trips at this time.</p>'
    destinationsSection.innerHTML = ''
  }
}

const displayExpenses = (expenses) => {
  destinationsSection.innerHTML = ''
  bottomHeading.innerHTML = '<h2>Yearly Expenses</h2>'
  destinationsSection.innerHTML +=
  '<h4>This year you have spent a total of $' + expenses + ' on fun excursions!</h4>'
}

//
export {
  changeFormView,
  displayTrips,
  displayExpenses

}
