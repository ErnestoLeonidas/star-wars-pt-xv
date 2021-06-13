import React, { useContext } from "react";
import Card from "../component/card";
import { Context } from "../store/appContext";

export default function Species() {
	const { store } = useContext(Context);
	const { species } = store;

	return (
		<div>
			<div className="container-fluid">
				<div className="row justify-content-center swfont">
					<h1>Species</h1>
				</div>
				<div className="row">
					{!!species &&
						species.length > 0 &&
						species.map((specie, index) => {
							//console.log(film.properties.director);
							return (
								<div key={index} className="col-4 p-3">
									<Card title={specie.name} uid={specie.uid} route={"specie"} />
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}
