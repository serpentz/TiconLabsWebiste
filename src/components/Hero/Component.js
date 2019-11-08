import React, { Fragment } from 'react';
import {logoSVG} from "../../assets"
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
							<a href="#" className="header-button" tabIndex={-1}>View portfolio</a>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Hero