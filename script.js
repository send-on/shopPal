const axios = require('axios')


var addToOliver = () => {
  axios.post('http://54.153.42.84:3000/increment/Oliver%20Han/hireability')
  .then(() => {
    addToOliver()
  })
}

addToOliver()
