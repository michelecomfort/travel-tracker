// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'



import { fetchData, } from './fetch'
import Session from './Session'

const userName = document.querySelector('#username')
const loginButton = document.querySelector('#login-button')

const retrieveUser = () => {
  let loginID = userName.value.split('').splice(8, 2).join('')
  console.log(loginName)

}
loginButton.addEventListener('click', retrieveUser)

const retrieveAllData = () => {
  Promise.all([fetchData('travelers', 'id'), fetchData('trips'), fetchData('destinations')]).then(data => {
    parseData(data)
    renderDom(session)
  }).catch(error => {
    console.log(error)
  })
}

const parseData = () => {
  session.retrieveUser(data[0])
  session.createTripsStorage(data[1])
  session.createDestinationsStorage(data[2])
}
