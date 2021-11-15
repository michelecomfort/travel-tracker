// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

import Glide from '@glidejs/glide';
import { Breakpoints } from '@glidejs/glide/dist/glide.modular.esm';
// import Glide, { Breakpoints } from '@glidejs/glide/dist/glide.modular.esm';


new Glide('.glide', {
  type: 'carousel',
  startAt: 1,
  perView: 3,
  focusAt: 'center',
  gap: 20,
  hoverpause: true,
  keyboard: true,
  breakpoints: {
  800: {
    perView: 2
  }
},

}).mount()

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/suitcase.png'
import './images/Cape-Town-South-Africa.png'
import './images/Madrid-Spain.png'
import './images/Manila-Philippines.png'
import './images/Kathmandu-Nepal.png'
import './images/Reykyavik-Iceland.png'
import './images/Wellington-NewZealand.png'
import './images/Bangkok-Thailand.png'




import { fetchUserData, fetchData, postData} from './fetch'
// import { changeFormView, displayPastTrips, displayUpcomingTrips, displayPendingTrips } from './domManipulation'
import Session from './Session'

const session = new Session()
const todayDate = new Date().toISOString().slice(0, 10).replaceAll('-', '/')
const userName = document.querySelector('#userName')
const loginButton = document.querySelector('#login-button')
const pastTrips = document.querySelector('#pastTrips')
const upcomingTrips = document.querySelector('#upcomingTrips')
const pendingTrips = document.querySelector('#pendingTrips')
const tripView = document.querySelector('#tripView')
const userMenu = document.querySelector('#userMenu')
const bottomHeading = document.querySelector('#bottomHeading')
const destinationsSection = document.querySelector('#destinations')
const browsers = document.querySelector('#browsers')
const startDate = document.querySelector('#startDate')
const guests = document.querySelector('#guests')
const numDays = document.querySelector('#numDays')
const getEstimate = document.querySelector('#getEstimate')
const estimateButton = document.querySelector('#estimateButton')
const browser = document.querySelector('#browser')
const bookButton = document.querySelector('#bookButton')
const glider = document.querySelector('#gliderSection')





const retrieveUser = () => {
  let loginID = userName.value.split('').splice(8, 2).join('')
  retrieveAllData(loginID)


}
loginButton.addEventListener('click', retrieveUser)


const retrieveAllData = (id) => {
  Promise.all([fetchUserData(id), fetchData('trips'), fetchData('destinations')]).then(data => {
    parseData(data)
    // renderDom(session)
  }).catch(error => {
    console.log(error)
  })
}

const parseData = (data) => {
  session.retrieveUser(data[0])
  session.createTripsStorage(data[1].trips)
  session.createDestinationsStorage(data[2].destinations)
  //below functions will move to domManip on click events

  // session.getTripCost(session, 'Cartagena, Colombia', 7, 2)
  addDestinationSearch()
  // session.getPastTrips(todayDate)
  // changeFormView(session, todayDate)
  // displayPastTrips()
  // session.getUpcomingTrips(todayDate)
  // toggleView()
  // renderDom(data)
}



const changeFormView = () => {
  switch (tripView.value) {
  case 'past':
    let past = session.userTripsObj.getPastTrips(todayDate)
    displayTrips(past, tripView.value)
    break;
  case 'upcoming':
    let upcoming = session.userTripsObj.getUpcomingTrips(todayDate)
    displayTrips(upcoming, tripView.value)
    break;
  case 'pending':
    let pending = session.userTripsObj.getPendingTrips()
    displayTrips(pending, tripView.value)
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
};

const displayTrips = (trips, value) => {
  // glider.classList.add('hidden')
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

const addDestinationSearch = () => {
  session.destinationData.forEach(dest => {
    browsers.innerHTML += `
    <option value="${dest.destination}">`
  })
}

const showEstimate = () => {
  if (browser.value && startDate.value && numDays.value && guests.value) {
    let result = session.destinationObj.getTripCost(browser.value, numDays.value, guests.value)
    getEstimate.innerHTML =
    '<p class="estimate-calculation">Your estimate cost would be ' + '$' + result + '.</p>'
    estimateButton.classList.add('hidden')
    bookButton.classList.remove('hidden')
  }
}

const getDestinationID = () => {
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

const bookTrip = () => {
  const bookTripData = {
    id: session.allTripsData.length + 1,
    userID: session.user.id,
    destinationID: getDestinationID(),
    travelers: guests.value,
    date: formatDate(startDate.value),
    duration: numDays.value,
    status: 'pending',
    suggestedActivities: []
  }
  postData(bookTripData)
  // addTripToPending(browser.value, startDate.value)
  // changeFormView()
  retrieveAllData(session.user.id)
}
// const renderDom = (session) => {
//   populateMyTrips()
//
//
//
// }

// const populateMyTrips = (data)
// const toggleView = (element) => {
//   element.className.toggle('hidden')
// }

const addTripToPending = (location, date) => {
  glider.classList.add('hidden')
  destinationsSection.innerHTML += `
  <section class='trips-display'>
  <h4>${location}</h4>
  <p>${date}</p>
  </section>
  `
}

bookButton.addEventListener('click', bookTrip)
estimateButton.addEventListener('click', showEstimate)
userMenu.addEventListener('change', changeFormView)
