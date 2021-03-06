import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const ViewStarship = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);
	const { starship } = store;

	useEffect(() => {
		actions.getStarShipById("https://www.swapi.tech/api/starships", id);
	}, []);

	return (
		<div className="container-fluid text-center">
			<div className="jumbotron">
				<h1 className="display-4">{!!starship && starship.properties.name}</h1>
				<p className="lead">{!!starship && starship.properties.model}</p>
				<hr className="my-2" />
				<p>{!!starship && starship.description}</p>
				<hr className="my-2" />
				<div className="lead">
					<div className="row text-danger">
						<div className="col">Starship class: {!!starship && starship.properties.starship_class}</div>
						<div className="col">Manufacturer: {!!starship && starship.properties.manufacturer}</div>
						<div className="col">Length: {!!starship && starship.properties.length}</div>
						<div className="col">Crew: {!!starship && starship.properties.crew}</div>
						<div className="col">Passengers: {!!starship && starship.properties.passengers}</div>
						<div className="col">
							Hyperdrive rating: {!!starship && starship.properties.hyperdrive_rating}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewStarship;
