let factContainer = document.querySelector("#factDiv")

let getFacts = () => {
        return fetch(
			"http://api.fungenerators.com/fact/random?category=Countries&subcategory=USA",
			{
				method: "GET",
				headers: {
					Accept: "application/json"
				}
			}
		)
			.then(fact => fact.json())
			.then(parsedFact => {
				let newFact = parsedFact.Fact;
				factContainer.innerHTML = newFact;
			});
    }

export default getFacts