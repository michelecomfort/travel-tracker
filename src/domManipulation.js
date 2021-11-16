import { postData } from './fetch';
import { retrieveAllData, toggleHidden } from './scripts';
//
const tripView = document.querySelector('#tripView')
const todayDate = new Date().toISOString().slice(0, 10).replaceAll('-', '/')
const bookTripBar = document.querySelector('#bookTripBar')
const destinationsSection = document.querySelector('#destinations')
const bottomHeading = document.querySelector('#bottomHeading')
const browsers = document.querySelector('#browsers')
const browser = document.querySelector('#browser')
const getEstimate = document.querySelector('#getEstimate')
const estimateButton = document.querySelector('#estimateButton')
const bookButton = document.querySelector('#bookButton')
const glider = document.querySelector('#gliderSection')
const startDate = document.querySelector('#startDate')
const guests = document.querySelector('#guests')
const numDays = document.querySelector('#numDays')
const greeting = document.querySelector('#greeting')

const greetUser = (session) => {
  let name = session.user.returnFirstName()
  greeting.innerHTML =
  '<h2>welcome back ' + name + '.</h2>'
  toggleHidden(userMenu)
  toggleHidden(bookTripBar)
}


////my account menu
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
    '<h3>my ' + value + ' trips</h3>'
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
    bottomHeading.innerHTML = '<h3>You have no ' + value + ' trips at this time.</h3>'
    destinationsSection.innerHTML = ''
  }
}

const displayExpenses = (expenses) => {
  destinationsSection.innerHTML = ''
  bottomHeading.innerHTML = '<h2>Yearly Expenses</h2>'
  destinationsSection.innerHTML +=
  '<h3>This year you have spent a total of $' + expenses + ' on fun excursions!</h3>'
}

///////book trip section
const addDestinationSearch = (session) => {
  session.destinationData.forEach(dest => {
    browsers.innerHTML += `
    <option value="${dest.destination}">`
  })
}

const showEstimate = (session) => {
  if (browser.value && startDate.value && numDays.value && guests.value) {
    let result = session.destinationObj.getTripCost(browser.value, numDays.value, guests.value)
    getEstimate.innerHTML =
    '<p class="estimate-calculation">Your estimate cost would be ' + '$' + result + '.</p>'
    estimateButton.classList.add('hidden')
    bookButton.classList.remove('hidden')
  }
}

const bookTrip = (session) => {
  const bookTripData = {
    id: session.allTripsData.length + 1,
    userID: session.user.id,
    destinationID: getDestinationID(session),
    travelers: guests.value,
    date: formatDate(startDate.value),
    duration: numDays.value,
    status: 'pending',
    suggestedActivities: []
  }
    postData(bookTripData).then(() => {
      retrieveAllData(session.user.id).then(() => {
        let pending = session.userTripsObj.getPendingTrips()
        displayTrips(session, pending, tripView.value)
      })
    }
  )
}

const getDestinationID = (session) => {
  let result = session.destinationData.find(dest => {
    if(dest.destination === browser.value) {
      return dest
    }
  })
  return result.id
}

const formatDate = (date) => {
  const formattedDate = date.replaceAll('-', '/');
  return formattedDate;
}

const addTripToPending = (location, date) => {
  glider.classList.add('hidden')
  destinationsSection.innerHTML += `
  <section class='trips-display'>
  <h4>${location}</h4>
  <p>${date}</p>
  </section>`
}

export {
  changeFormView,
  displayTrips,
  displayExpenses,
  addDestinationSearch,
  showEstimate,
  bookTrip,
  getDestinationID,
  formatDate,
  addTripToPending,
  greetUser
}
