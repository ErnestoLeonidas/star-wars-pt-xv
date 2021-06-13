import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const ViewSpecie = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);
	const { specie } = store;

	useEffect(() => {
		actions.getSpecieById("https://www.swapi.tech/api/species", id);
	}, []);

	return (
		<div className="container-fluid text-center">
			<div className="jumbotron">
				<h1 className="display-4">{!!specie && specie.properties.name}</h1>
				{/* <p className="lead">{!!specie && specie.description}</p> */}
				<hr className="my-2" />
				<p>{!!specie && specie.description}</p>
				<hr className="my-2" />
				<div className="lead">
					<div className="row text-danger">
						<div className="col">Classification: {!!specie && specie.properties.classification}</div>
						<div className="col">Designation: {!!specie && specie.properties.designation}</div>
						<div className="col">Average height: {!!specie && specie.properties.average_height}</div>
						<div className="col">Average lifespan: {!!specie && specie.properties.average_lifespan}</div>
						<div className="col">Hair colors: {!!specie && specie.properties.hair_colors}</div>
						<div className="col">Skin colors: {!!specie && specie.properties.skin_colors}</div>
						<div className="col">Eye colors: {!!specie && specie.properties.eye_colors}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewSpecie;
