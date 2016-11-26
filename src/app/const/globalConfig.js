export default {
  API: 'https://onlinedeliveryback.herokuapp.com',
  header: {
    headers: {
      Authorization: sessionStorage.jwtToken
    }
  }
}
