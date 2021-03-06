import './css/base.scss';
import Glide from '@glidejs/glide';

new Glide('.glide', {
  type: 'carousel',
  startAt: 1,
  perView: 3,
  focusAt: 'center',
  gap: 20,
  hoverpause: true,
  keyboard: true,
}).mount()

import './images/suitcase.png'
import './images/Cape-Town-South-Africa.png'
import './images/Madrid-Spain.png'
import './images/Manila-Philippines.png'
import './images/Kathmandu-Nepal.png'
import './images/Reykyavik-Iceland.png'
import './images/Wellington-NewZealand.png'
import './images/Bangkok-Thailand.png'

import { fetchUserData, fetchData } from './fetch'
import { changeFormView, addDestinationSearch, showEstimate, bookTrip, greetUser } from './domManipulation'
import Session from './Session'

const session = new Session()
const loginForm = document.querySelector('#loginForm')
const userName = document.querySelector('#userName')
const loginButton = document.querySelector('#login-button')
const userMenu = document.querySelector('#userMenu')
const password = document.querySelector('#password')
const error = document.querySelector('#error')
const bookButton = document.querySelector('#bookButton')
const estimateButton = document.querySelector('#estimateButton')
const startDate = document.querySelector('#startDate')

const minimumCalendarDate = () => {
  startDate.min = new Date().toISOString().substr(0, 10)
}

const destImage = document.querySelector('.glide__track')
destImage.addEventListener('mouseover', function(event) {
  console.log(event.target.nextElementSibling.classList)
  if (event.target.classList.contains('dest-image')) {
    const destLocation = event.target.nextElementSibling
    console.log(destLocation)
    destLocation.classList.remove('dest-name-hidden')
  }
})

loginButton.addEventListener('click', function() {
  login()
})
bookButton.addEventListener('click', function() {
  bookTrip(session)
})
estimateButton.addEventListener('click', function() {
  showEstimate(session)
})
userMenu.addEventListener('change', function() {
  changeFormView(session)
})

function login() {
  let loginID = userName.value.split('').splice(8, 2).join('')
  if (userName.value === `traveler${loginID}` && password.value === 'travel') {
    retrieveAllData(loginID)
    toggleHidden(error)
    toggleHidden(loginForm)
  } else {
    error.innerHTML +=
    '<p class="login-message">Sorry, there is an error with your username and password. Please try again.</p>'
  }
}

const toggleHidden = (element) => {
  element.classList.toggle('hidden')
}

const retrieveAllData = (id) => {
  return Promise.all([fetchUserData(id), fetchData('trips'), fetchData('destinations')]).then(data => {
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
  greetUser(session)
}

minimumCalendarDate()

export {
  retrieveAllData,
  toggleHidden
}
