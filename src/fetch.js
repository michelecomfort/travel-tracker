<<<<<<< HEAD
const fetchUserData = (id) => {
  return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(result => result.json())
}

const fetchData = (dataset) => {
return fetch(`http://localhost:3001/api/v1/${dataset}`)
  .then(result => result.json())
}

=======
const fetchData = (dataset,id) => {
  return fetch(`http://localhost:3001/api/v1/${dataset}/${id}`)
    .then(result => result.json())
}

>>>>>>> 8751a4c376aaeccae39e41a943775e20970e75aa
const postData = (data) => {
  return fetch (`http://localhost:3001/api/v1/trips`, {
    method: 'Post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => 'SUCCESS')
    .catch(error => 'ERROR')
}

export {
<<<<<<< HEAD
  fetchUserData,
=======
>>>>>>> 8751a4c376aaeccae39e41a943775e20970e75aa
  fetchData,
  postData
}
