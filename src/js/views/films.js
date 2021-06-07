import React, { useContext } from "react";
import CardFilm from "../component/cardFilm";
import { Context } from "../store/appContext";

export default function Films() {
	const { store } = useContext(Context);
	const { films } = store;
	console.log(films);

	return (
		<div>
			<div className="container-fluid">
				<div className="row justify-content-center swfont">
					<h1>Films</h1>
				</div>
				<div className="row">
					{!!films &&
						films.length > 0 &&
						films.map((film, index) => {
							//console.log(film.properties.director);
							return (
								<div key={index} className="col-4 p-3">
									<CardFilm
										title={film.properties.title}
										episode={film.properties.episode_id}
										director={film.properties.director}
										release_date={film.properties.release_date}
									/>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}
