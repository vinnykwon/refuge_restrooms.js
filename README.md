# refuge_restrooms.js
Web-API for [refugerestrooms.org](https://www.refugerestrooms.org/) an website that finds safe restrooms for transgender, intersex, and gender nonconforming individuals

```JavaScript
async function main() {
	const { RefugeRestrooms } = require("./refuge_restrooms.js")
	const refugeRestrooms = new RefugeRestrooms()
	const allRestrooms = await refugeRestrooms.getAllRestrooms()
	console.log(allRestrooms)
}

main()
```
