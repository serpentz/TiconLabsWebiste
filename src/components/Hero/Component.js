import React, { Fragment } from 'react';
import {logoSVG} from "../../assets"
import { Link } from "react-router-dom";
function Hero() {
	return (
		<Fragment>
			<div className="header-content fullheight">
				<div className="slick-header fullheight">
					<div className="header-slide slide-2">
						<div className="container">
							<img src={logoSVG} className="pull-left header-p" alt="P" />
							<p className="pre-title">Welcome to Ticon Labs</p>
							<h2>We build amazing<br /><span>Software</span></h2>
							<Link to="/portfolio" className="header-button">View portfolio</Link>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Hero