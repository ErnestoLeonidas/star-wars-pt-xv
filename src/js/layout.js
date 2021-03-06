import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import Films from "./views/films";
import People from "./views/people";
import Planets from "./views/planets";
import Species from "./views/species";
import Starships from "./views/starships";
import Vehicles from "./views/vehicles";

import ViewFilm from "./views/viewFilm";
import ViewCharacter from "./views/viewCharacter";
import ViewPlanet from "./views/viewPlanet";
import ViewSpecie from "./views/viewSpecie";
import ViewStarship from "./views/viewStarship";
import ViewVehicle from "./views/viewVehicle";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/films">
							<Films />
						</Route>
						<Route exact path="/film/:id">
							<ViewFilm />
						</Route>
						<Route exact path="/people">
							<People />
						</Route>
						<Route exact path="/character/:id">
							<ViewCharacter />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/planet/:id">
							<ViewPlanet />
						</Route>
						<Route exact path="/species">
							<Species />
						</Route>
						<Route exact path="/specie/:id">
							<ViewSpecie />
						</Route>
						<Route exact path="/starships">
							<Starships />
						</Route>
						<Route exact path="/starship/:id">
							<ViewStarship />
						</Route>
						<Route exact path="/vehicles">
							<Vehicles />
						</Route>
						<Route exact path="/vehicle/:id">
							<ViewVehicle />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					{/* <Footer /> */}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
