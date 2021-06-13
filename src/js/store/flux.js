const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			films: null,
			film: null,
			people: null,
			character: null,
			planets: null,
			planet: null,
			species: null,
			specie: null,
			starships: null,
			starship: null,
			vehicles: null,
			vehicle: null
		},
		actions: {
			getFilms: url => {
				fetch(url, {})
					.then(response => {
						if (!response.ok) setStore({ error: response.error });
						return response.json();
					})
					.then(data => {
						setStore({ films: data.result });
					})
					.catch(() => {});
			},

			getFilmById: (url, id) => {
				fetch(`${url}/${id}`)
					.then(response => {
						if (!response.ok) setStore({ error: response.error });
						return response.json();
					})
					.then(data => {
						setStore({ film: data.result });
					})
					.catch(() => {});
			},

			getPeople: url => {
				fetch(url, {})
					.then(response => {
						if (!response.ok) setStore({ error: response.error });
						return response.json();
					})
					.then(data => {
						setStore({ people: data.results });
					})
					.catch(() => {});
			},

			getPeopleById: (url, id) => {
				fetch(`${url}/${id}`)
					.then(response => {
						if (!response.ok) setStore({ error: response.error });
						return response.json();
					})
					.then(data => {
						setStore({ character: data.result });
					})
					.catch(() => {});
			},

			getPlanets: url => {
				fetch(url, {})
					.then(response => {
						if (!response.ok) setStore({ error: response.error });
						return response.json();
					})
					.then(data => {
						setStore({ planets: data.results });
					})
					.catch(() => {});
			},

			getPlanetById: (url, id) => {
				fetch(`${url}/${id}`)
					.then(response => {
						if (!response.ok) setStore({ error: response.error });
						return response.json();
					})
					.then(data => {
						setStore({ planet: data.result });
					})
					.catch(() => {});
			},

			getSpecies: url => {
				fetch(url, {})
					.then(response => {
						if (!response.ok) setStore({ error: response.error });
						return response.json();
					})
					.then(data => {
						setStore({ species: data.results });
					})
					.catch(() => {});
			},

			getSpecieById: (url, id) => {
				fetch(`${url}/${id}`)
					.then(response => {
						if (!response.ok) setStore({ error: response.error });
						return response.json();
					})
					.then(data => {
						setStore({ specie: data.result });
					})
					.catch(() => {});
			},

			getStarShips: url => {
				fetch(url, {})
					.then(response => {
						if (!response.ok) setStore({ error: response.error });
						return response.json();
					})
					.then(data => {
						setStore({ starships: data.results });
					})
					.catch(() => {});
			},

			getStarShipById: (url, id) => {
				fetch(`${url}/${id}`)
					.then(response => {
						if (!response.ok) setStore({ error: response.error });
						return response.json();
					})
					.then(data => {
						setStore({ starship: data.result });
					})
					.catch(() => {});
			},

			getVehicles: url => {
				fetch(url, {})
					.then(response => {
						if (!response.ok) setStore({ error: response.error });
						return response.json();
					})
					.then(data => {
						setStore({ vehicles: data.results });
					})
					.catch(() => {});
			},

			getVehicleById: (url, id) => {
				fetch(`${url}/${id}`)
					.then(response => {
						if (!response.ok) setStore({ error: response.error });
						return response.json();
					})
					.then(data => {
						setStore({ vehicle: data.result });
					})
					.catch(() => {});
			}
		}
	};
};

export default getState;
