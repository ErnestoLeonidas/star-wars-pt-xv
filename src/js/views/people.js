import React, { useContext } from "react";
import Card from "../component/card";
import { Context } from "../store/appContext";

export default function People() {
	const { store } = useContext(Context);
	const { people } = store;
	// console.log(starships);

	return (
		<div>
			<div className="container-fluid">
				<div className="row justify-content-center swfont">
					<h1>People</h1>
				</div>
				<div className="row">
					{!!people &&
						people.length > 0 &&
						people.map((character, index) => {
							//console.log(film.properties.director);
							return (
								<div key={index} className="col-4 p-3">
									<Card title={character.name} uid={character.uid} route={"character"} />
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}
