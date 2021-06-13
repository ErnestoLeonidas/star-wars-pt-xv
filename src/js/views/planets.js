import React, { useContext } from "react";
import Card from "../component/card";
import { Context } from "../store/appContext";

export default function Planets() {
	const { store } = useContext(Context);
	const { planets } = store;

	return (
		<div>
			<div className="container-fluid">
				<div className="row justify-content-center swfont">
					<h1>Planets</h1>
				</div>
				<div className="row">
					{!!planets &&
						planets.length > 0 &&
						planets.map((planet, index) => {
							//console.log(film.properties.director);
							return (
								<div key={index} className="col-4 p-3">
									<Card title={planet.name} uid={planet.uid} route={"planet"} />
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}
