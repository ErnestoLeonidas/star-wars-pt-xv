import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const ViewCharacter = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);
	const { character } = store;

	useEffect(() => {
		actions.getPeopleById("https://www.swapi.tech/api/people", id);
	}, []);

	return (
		<div className="container-fluid text-center">
			<div className="jumbotron">
				<h1 className="display-4">{!!character && character.properties.name}</h1>
				<p className="lead">{!!character && character.properties.birth_year}</p>
				<hr className="my-2" />
				<p>{!!character && character.description}</p>
				<hr className="my-2" />
				<div className="lead">
					<div className="row text-danger">
						<div className="col">Height: {!!character && character.properties.height}</div>
						<div className="col">Mass: {!!character && character.properties.mass}</div>
						<div className="col">Hair color: {!!character && character.properties.hair_color}</div>
						<div className="col">Skin color: {!!character && character.properties.skin_color}</div>
						<div className="col">Eye color: {!!character && character.properties.eye_color}</div>
						<div className="col">Gender: {!!character && character.properties.gender}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewCharacter;
