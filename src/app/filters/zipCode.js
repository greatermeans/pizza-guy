const formatZipCode = (zipCode) => {
  let formattedZipCode

  if (!zipCode) {
    formattedZipCode = ''
  } else {
    formattedZipCode = zipCode.replace(/\D/g, '')
  }

  if (formattedZipCode.length > 5) {
    formattedZipCode = formattedZipCode.replace(/(\d{5})(\d+)/, '$1-$2')
  }

  return formattedZipCode
}

export { formatZipCode }
