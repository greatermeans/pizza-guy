export default {
  formatPhoneNumber(phoneNumber) {
    if (!phoneNumber) {
      return ''
    }
    phoneNumber = phoneNumber.replace(/\D/g, '')

    if (phoneNumber.length < 4) {
      return `${phoneNumber.slice(0, 3)}`
    } else if (phoneNumber.length < 7) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`
    } else if (phoneNumber.length === 7) {
      return phoneNumber.replace(/(\d{3})(\d{4})/, '$1-$2')
    } else if (phoneNumber.length < 10) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`
    } else if (phoneNumber.length === 10) {
      return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
    }

    return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})(\d+)/, '($1) $2-$3 ex. $4')
  },

  displayPhoneNumber(phoneNumber) {
    if (phoneNumber && (parseInt(phoneNumber.slice(10), 10) === 0 || !phoneNumber.slice(10))) {
      return phoneNumber.slice(0, 10).replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
    }

    return phoneNumber && phoneNumber.replace(/(\d{3})(\d{3})(\d{4})(\d+)/, '($1) $2-$3 ex. $4')
  }
}
