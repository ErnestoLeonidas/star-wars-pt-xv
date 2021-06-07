import React from "react";

export const CardStarShip = prop => {
	return (
		<div className="card">
			{/* <img src="..." className="card-img-top" alt="..." /> */}
			<div className="card-body ml-2">
				<div className="row justify-content-center swfont">
					<h5 className="card-title">N: {prop.uid}</h5>
				</div>
				<div className="row justify-content-center ">
					<h2>{prop.name}</h2>
				</div>

				{/* <div className="row">Director: {prop.url}</div> */}

				<div className="btn btn-outline-success mt-2">Ver</div>
			</div>
		</div>
	);
};

export default CardStarShip;
