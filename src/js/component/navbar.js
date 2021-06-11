import React from "react";
import { Link } from "react-router-dom";

import swLogo from "../../img/swlogo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<h2 className="swfont ml-2">Star wars</h2>
				{/* <img className="swlogo" src={swLogo} /> */}
			</Link>
			<div className="ml-auto">
				<Link to="/films">
					<button className="btn btn-outline-warning mr-2 swfont">Films</button>
				</Link>
				<Link to="/people">
					<button className="btn btn-outline-warning mr-2 swfont">People</button>
				</Link>
				<Link to="/planets">
					<button className="btn btn-outline-warning mr-2 swfont">Planets</button>
				</Link>
				<Link to="/species">
					<button className="btn btn-outline-warning mr-2 swfont">Species</button>
				</Link>
				<Link to="/starships">
					<button className="btn btn-outline-warning mr-2 swfont">Star Ships</button>
				</Link>
				<Link to="/vehicles">
					<button className="btn btn-outline-warning mr-2 swfont">vehicles</button>
				</Link>

				<span className="dropdown">
					<button
						className="btn btn-outline-warning dropdown-toggle mr-2 swfont"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#">
							Empty
						</a>
					</div>
				</span>
			</div>
		</nav>
	);
};
