import React from "react";

export const Card = prop => {
	return (
		<div className="card">
			{/* <img src="..." className="card-img-top" alt="..." /> */}
			<div className="card-body ml-2">
				{!!prop.title ? (
					<div className="row justify-content-center swfont-white">
						<h5 className="card-title">{prop.title}</h5>
					</div>
				) : (
					""
				)}
				{!!prop.episode ? <div className="row">Empisode: {prop.episode}</div> : ""}
				{!!prop.director ? <div className="row">Director: {prop.director}</div> : ""}
				{!!prop.release_date ? <div className="row">Release Date: {prop.release_date}</div> : ""}
				{!!prop.name ? <div className="row">Name: {prop.name}</div> : ""}

				<div className="btn btn-outline-info mt-2">Learn more!</div>
			</div>
		</div>
	);
};

export default Card;
