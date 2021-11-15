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
import { changeFormView, displayTrips, displayExpenses, addDestinationSearch, showEstimate, bookTrip, getDestinationID, formatDate } from './domManipulation'
import Session from './Session'

const session = new Session()
const userName = document.querySelector('#userName')
const loginButton = document.querySelector('#login-button')
const userMenu = document.querySelector('#userMenu')

const retrieveUser = () => {
  let loginID = userName.value.split('').splice(8, 2).join('')
  retrieveAllData(loginID)
}

const retrieveAllData = (id) => {
  Promise.all([fetchUserData(id), fetchData('trips'), fetchData('destinations')]).then(data => {
    parseData(data)
  }).catch(error => {
    console.log(error)
  })
}

const parseData = (data) => {
  session.retrieveUser(data[0])
  session.createTripsStorage(data[1].trips)
  session.createDestinationsStorage(data[2].destinations)
  addDestinationSearch(session)
}

bookButton.addEventListener('click', function() {
  bookTrip(session)
})
estimateButton.addEventListener('click', function() {
  showEstimate(session)
})
userMenu.addEventListener('change', function() {
  changeFormView(session)
})
loginButton.addEventListener('click', retrieveUser)



export {
  retrieveAllData
}
