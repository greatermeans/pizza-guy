const globalConfig = {
	API: `http://localhost:3000`,
	header: {
		headers: {Authorization: sessionStorage.jwtToken}
	}
}

export default globalConfig