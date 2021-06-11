import React from "react";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="star-wars-intro">
			<p className="intro-text">A long time ago in a galaxy far, far away....</p>

			<div className="main-content">
				<div className="title-content">
					<p className="content-header">
						EPISODES IV-VI
						<br />A Movie Marathon
					</p>

					<p className="content-body">
						After years of galactic silence, civilization is on the brink of a new Star Wars release. Now,
						with the Force preparing to awaken, the people of Earth seek solace in films of old. With
						nowhere to turn, they gather in great numbers and watch the original trilogy without rest. Three
						films. 6 hours. 24 minutes. Popcorn. Sushies.
					</p>
				</div>
			</div>
		</div>
	);
};
