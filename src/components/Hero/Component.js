import React, { Fragment } from 'react';

function Hero() {
	return (
		<Fragment>
			<div className="header-content fullheight">
				<div className="slick-header fullheight">
					<div className="header-slide slide-2">
						<div className="container">
							<img src="http://via.placeholder.com/266x323" className="pull-left header-p" alt="P" />
							<p className="pre-title">Welcome to Pintu</p>
							<h2>We build amazing<br /><span>Design</span></h2>
							<a href="#" className="header-button" tabIndex={-1}>View portfolio</a>
							<a className="header-link pushleft" href="#" tabIndex={-1}>Check our easy design process and actions</a>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Hero