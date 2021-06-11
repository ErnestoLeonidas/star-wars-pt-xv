import React, { useContext } from "react";
import Card from "../component/card";
import { Context } from "../store/appContext";

export default function Starships() {
	const { store } = useContext(Context);
	const { starships } = store;
	// console.log(starships);

	return (
		<div>
			<div className="container-fluid">
				<div className="row justify-content-center swfont">
					<h1>Star Ships</h1>
				</div>
				<div className="row">
					{!!starships &&
						starships.length > 0 &&
						starships.map((starship, index) => {
							//console.log(film.properties.director);
							return (
								<div key={index} className="col-4 p-3">
									<Card uid={starship.uid} title={starship.name} url={starship.url} />
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}
