// import { postData } from './fetch';
//
// const bottomHeading = document.querySelector('#bottomHeading')
// const destinationsSection = document.querySelector('#destinations')
// // const userMenu = document.querySelector('#userMenu')
// const tripView = document.querySelector('#tripView')
//
// const changeFormView = (session, todayDate) => {
//   console.log(session.getPastTrips(todayDate))
//   switch (tripView.value) {
//   case 'past':
//     session.getPastTrips(todayDate)
//     displayPastTrips()
//     break;
//   case 'upcoming':
//     session.getUpcomingTrips(todayDate)
//     displayUpcomingTrips()
//     break;
//   case 'pending':
//     session.getPendingTrips()
//     displayPendingTrips()
//     break;
//     // case 'expenses.':
//     //
//     //   break;
//   default:
//     console.log('something went wrong');
//     break;
//   }
// };
//
// const displayPastTrips = () => {
//   bottomHeading.innerHTML = `
//   <h2>my past trips</h2>
//   `
//   destinationsSection.innerHTML = `
//   `
// }
//
// const displayUpcomingTrips = () => {
//   bottomHeading.innerHTML = `
//   <h2>my upcoming trips</h2>
//   `
//   destinationsSection.innerHTML = `
//   `
// }
//
// const displayPendingTrips = () => {
//   bottomHeading.innerHTML = `
//   <h2>my pending trips</h2>
//   `
//   destinationsSection.innerHTML = `
//   `
// }
//
// // userMenu.addEventListener('change', changeFormView(session, todayDate))
//
// export {
//   // changeFormView,
//   displayPastTrips,
//   displayUpcomingTrips,
//   displayPendingTrips
// }
