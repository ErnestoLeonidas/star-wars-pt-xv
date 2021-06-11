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
						people.map((people, index) => {
							//console.log(film.properties.director);
							return (
								<div key={index} className="col-4 p-3">
									<Card uid={people.uid} title={people.name} url={people.url} />
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}
