const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			films: null,
			film: null,
			people: null,
			planets: null,
			species: null,
			starships: null,
			vehicles: null
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
			}
		}
	};
};

export default getState;
