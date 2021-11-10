// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'



import { fetchUserData, fetchData, } from './fetch'
import Session from './Session'

const session = new Session()
const userName = document.querySelector('#username')
const loginButton = document.querySelector('#login-button')

const retrieveUser = () => {
  let loginID = userName.value.split('').splice(8, 2).join('')
  retrieveAllData(loginID)

}
loginButton.addEventListener('click', retrieveUser)

const retrieveAllData = (id) => {


  Promise.all([fetchUserData('travelers', id), fetchData('trips'), fetchData('destinations')]).then(data => {
    console.log('here')
    parseData(data)
    // renderDom(session)
  }).catch(error => {
    console.log(error)
  })
}

const parseData = (data) => {
  session.retrieveUser(data[0])
  session.createTripsStorage(data[1])
  // session.createDestinationsStorage(data[2])
}
