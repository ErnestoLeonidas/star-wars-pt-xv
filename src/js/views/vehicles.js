import React, { useContext } from "react";
import Card from "../component/card";
import { Context } from "../store/appContext";

export default function Vehicles() {
	const { store } = useContext(Context);
	const { vehicles } = store;

	return (
		<div>
			<div className="container-fluid">
				<div className="row justify-content-center swfont">
					<h1>vehicles</h1>
				</div>
				<div className="row">
					{!!vehicles &&
						vehicles.length > 0 &&
						vehicles.map((vehicle, index) => {
							//console.log(film.properties.director);
							return (
								<div key={index} className="col-4 p-3">
									<Card title={vehicle.name} />
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}
