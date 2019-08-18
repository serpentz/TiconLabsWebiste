import React, {Fragment} from 'react';

function Hero() {
    return (
    <Fragment>
		<div className="header-content fullheight">
			<div className="slick-header fullheight">
				<div className="header-slide slide-2">
					<div className="container">
						<img src="http://via.placeholder.com/266x323" className="pull-left header-p" alt="P"/>
						<p className="pre-title">Welcome to Ticon</p>
						<h2>We build amazing<span>A p p s</span></h2>
						<a href="#" className="header-button">View portfolio</a>
						<a className="header-link pushleft" href="#">Check our easy design && development process </a>
					</div>
				</div>
			</div>
		</div>
	</Fragment>
    )
} 

export default Hero