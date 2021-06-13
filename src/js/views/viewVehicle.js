import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const ViewVehicle = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);
	const { vehicle } = store;

	useEffect(() => {
		actions.getVehicleById("https://www.swapi.tech/api/vehicles", id);
	}, []);

	return (
		<div className="container-fluid text-center">
			<div className="jumbotron">
				<h1 className="display-4">{!!vehicle && vehicle.properties.name}</h1>
				<p className="lead">{!!vehicle && vehicle.model}</p>
				<hr className="my-2" />
				<p>{!!vehicle && vehicle.description}</p>
				<hr className="my-2" />
				<div className="lead">
					<div className="row text-danger">
						<div className="col">Vehicle class: {!!vehicle && vehicle.properties.vehicle_class}</div>
						<div className="col">Manufacturer: {!!vehicle && vehicle.properties.manufacturer}</div>
						<div className="col">Length: {!!vehicle && vehicle.properties.length}</div>
						<div className="col">Crew: {!!vehicle && vehicle.properties.crew}</div>
						<div className="col">Passengers: {!!vehicle && vehicle.properties.passengers}</div>
						<div className="col">Cargo capacity: {!!vehicle && vehicle.properties.cargo_capacity}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewVehicle;
