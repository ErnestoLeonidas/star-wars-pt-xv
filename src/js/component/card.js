import React from "react";
import { Link } from "react-router-dom";

export const Card = prop => {
	return (
		<div className="card">
			{/* <img src="..." className="card-img-top" alt="..." /> */}
			<div className="card-body ml-2 mr-2">
				{!!prop.title ? (
					<div className="row justify-content-center swfont-white">
						<h5 className="card-title">{prop.title}</h5>
					</div>
				) : (
					""
				)}
				{!!prop.episode ? <div className="row">Episode: {prop.episode}</div> : ""}
				{!!prop.director ? <div className="row">Director: {prop.director}</div> : ""}
				{!!prop.release_date ? <div className="row">Release Date: {prop.release_date}</div> : ""}
				{!!prop.uid ? <div className="row">UID: {prop.uid}</div> : ""}

				{!!prop.name ? <div className="row">Name: {prop.name}</div> : ""}

				<div className="row justify-content-between">
					<Link to={`/${prop.route}/${prop.uid}`} className="btn btn-outline-info mt-2">
						Learn more!
					</Link>

					<button type="button" className="btn btn-outline-info mt-2">
						<i className="far fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
