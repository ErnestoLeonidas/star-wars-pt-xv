import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const ViewFilm = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);
	const { film } = store;

	useEffect(() => {
		actions.getFilmById("https://www.swapi.tech/api/films", id);
	}, []);

	return (
		<div className="container-fluid text-center">
			<div className="jumbotron">
				<h1 className="display-4">{!!film && film.properties.title}</h1>
				<p className="lead">Director: {!!film && film.properties.director}</p>
				<hr className="my-2" />
				<p>{!!film && film.properties.opening_crawl}</p>
				<hr className="my-2" />
				<div className="lead">
					<div className="row text-danger">
						<div className="col">Characters: {!!film && film.properties.characters.length}</div>
						<div className="col">Planets: {!!film && film.properties.planets.length}</div>
						<div className="col">Starships: {!!film && film.properties.starships.length}</div>
						<div className="col">Vehicles: {!!film && film.properties.vehicles.length}</div>
						<div className="col">Species: {!!film && film.properties.species.length}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewFilm;
