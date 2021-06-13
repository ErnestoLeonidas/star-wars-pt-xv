import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const ViewPlanet = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);
	const { planet } = store;

	useEffect(() => {
		actions.getPlanetById("https://www.swapi.tech/api/planets", id);
	}, []);

	return (
		<div className="container-fluid text-center">
			<div className="jumbotron">
				<h1 className="display-4">{!!planet && planet.properties.name}</h1>
				{/* <p className="lead">{!!planet && planet.description}</p> */}
				<hr className="my-2" />
				<p>{!!planet && planet.description}</p>
				<hr className="my-2" />
				<div className="lead">
					<div className="row text-danger">
						<div className="col">Diameter: {!!planet && planet.properties.diameter}</div>
						<div className="col">Rotation_period: {!!planet && planet.properties.rotation_period}</div>
						<div className="col">Orbital_period: {!!planet && planet.properties.orbital_period}</div>
						<div className="col">Gravity: {!!planet && planet.properties.gravity}</div>
						<div className="col">Population: {!!planet && planet.properties.population}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewPlanet;
