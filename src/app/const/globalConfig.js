export default {
  API: 'http://localhost:3000',
  header: {
    headers: {
      Authorization: sessionStorage.jwtToken
    }
  }
}
