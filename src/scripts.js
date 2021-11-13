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
const startDate = document.querySelector('#startDate')




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
  session.getTotalDollarSpentThisYear()
  session.getTripCost('Cartagena, Colombia', 7, 2)
  // session.getPastTrips(todayDate)
  changeFormView()
  // session.getUpcomingTrips(todayDate)
  // toggleView()
  // renderDom(data)
}

const changeFormView = () => {
  switch (tripView.value) {
  case 'past':
    session.getPastTrips(todayDate)
    break;
  case 'upcoming':
    session.getUpcomingTrips(todayDate)

    break;
  case 'pending':
    session.getPendingTrips()
    break;
  //   case 'expenses.':
  //
  //     break;
  default:
    console.log('something went wrong');
    break;
  }
};
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

// const changeTripFormView = () => {
//   switch (tripType.value) {
//     case 'past trips':
//
//   }
// }
userMenu.addEventListener('change', changeFormView)
