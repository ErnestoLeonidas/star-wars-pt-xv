import React from "react";

export const CardFilm = prop => {
	return (
		<div className="card">
			{/* <img src="..." className="card-img-top" alt="..." /> */}
			<div className="card-body ml-2">
				<div className="row justify-content-center swfont">
					<h5 className="card-title">{prop.title}</h5>
				</div>
				<div className="row">Episode: {prop.episode}</div>

				<div className="row">Director: {prop.director}</div>

				<div className="row">Release Date: {prop.release_date}</div>

				<div className="btn btn-outline-success mt-2">Favorito</div>
			</div>
		</div>
	);
};

export default CardFilm;
