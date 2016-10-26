// const googleMapsClient = require('@google/maps').createClient({
//   key: 'AIzaSyCfIm9SvYS95hI47ulG5GEMmWKtl9JenlE'
// });

export default {
  API: 'http://localhost:3000',
  header: {
    headers: {
      Authorization: sessionStorage.jwtToken
    }
  },
  // googleMapsClient
}
