export default {
  API: 'http://localhost:3005',
  header: {
    headers: {
      Authorization: sessionStorage.jwtToken
    }
  }
}
