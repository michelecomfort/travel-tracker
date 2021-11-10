// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


console.log('This is the JavaScript entry file - your code begins here.');

const userName = document.querySelector('#username')
const loginButton = document.querySelector('#login-button')

const retrieveUser = () => {
  let loginID = userName.value.split('').splice(8, 2).join('')
  console.log(`travelers/${loginID}`)


}
loginButton.addEventListener('click', retrieveUser)
