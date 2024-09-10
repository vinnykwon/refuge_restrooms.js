class RefugeRestrooms {
	constructor() {
		this.api = "https://www.refugerestrooms.org/api/v1"
		this.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getAllRestrooms() {
		const response = await fetch(
			`${this.api}/restrooms`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getRestroomsByDate(day, month, year, page = 1, perPage = 10, offset = 0) {
		const response = await fetch(
			`${this.api}/restrooms/by_date?day=${day}&month=${month}&year=${year}&page=${page}&per_page=${perPage}&offset=${offset}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getRestroomsByLocation(latitude, longitude, page = 1, perPage = 10, offset = 0) {
		const response = await fetch(
			`${this.api}/restrooms/by_location?lat=${latitude}&lng=${longitude}&page=${page}&per_page=${perPage}&offset=${offset}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async searchRestrooms(query, page = 1, perPage = 10, offset = 0) {
		const response = await fetch(
			`${this.api}/restrooms/search?query=${query}&page=${page}&per_page=${perPage}&offset=${offset}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {RefugeRestrooms}
