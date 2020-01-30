import React from 'react';
import {Hero} from "../../components"
import {Contact} from "../../containers"
import { Link } from "react-router-dom";

function Container() {

    return (
        <React.Fragment>  
			<header>
            	<Hero /> 
			</header>
        <div>
            <div className="container">
			<div className="banner-widget-container banner-background box-shadow-1 text-center pulltop-140">
				<div className="row">
					<div className="col-md-4">
						<div className="banner-widget">
							<div className="image-container">
								<div style={{background: "#777",width: "110px", height: "120px"
								}} alt="Banner image"/>
							</div>
							<h6>We are developers</h6>
							<p>
								Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
								invidunt ut labore et dolor erat, sed diam voluptua.
							</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="banner-widget">
							<div className="image-container">
							<div style={{background: "#777",width: "110px", height: "120px"
								}} alt="Banner image"/>
							</div>
							<h6>We think big</h6>
							<p>
								Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
								invidunt ut labore et dolor erat, sed diam voluptua.
							</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="banner-widget">
							<div className="image-container">
							<div style={{background: "#777",width: "110px", height: "120px"
								}} alt="Banner image"/>
							</div>
							<h6>We are Entreprenuers</h6>
							<p>
								Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
								invidunt ut labore et dolor erat, sed diam voluptua.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="row pushtop-130 about1">
				<div className="col-lg-5 drag-this-left">
					<p className="pretitle">WHAT WE DO</p>
					<h3>We create software applications with passion</h3>
					<div className="about1-inner box-shadow-1 grad-1">
						<p>
							&quot; Helping small and big companies to grow
							their business with a modern development technologies. &quot;
						</p>
						<Link to="/portfolio">
							<span className="count">10</span>
							<div className="small-text">
								happy clients &amp;
								satisfied customers
							</div>
							<i className="fa fa-caret-right fa-2x"></i>
						</Link>
					</div>
				</div>
				{/* <div className="col-lg-7">
					<iframe src="https://www.youtube.com/embed/v4oN4DuR7YU?rel=0"></iframe>
				</div> */}
			</div>

			{/* <div className="statistics text-center pushtop-120">
				<p className="pretitle">SIMPLE STATISTICS</p>
				<div className="row pushtop-60">
					<div className="col-md-3 statistic drag-this-left">
						<p className="count">1.300+</p>
						<p className="metric">satisfied customers</p>
					</div>
					<div className="col-md-3 statistic drag-this-up">
						<p className="count">3.242</p>
						<p className="metric">created designs assets</p>
					</div>
					<div className="col-md-3 statistic drag-this-up">
						<p className="count">12M</p>
						<p className="metric">lines of code</p>
					</div>
					<div className="col-md-3 statistic drag-this-right">
						<p className="count">284</p>
						<p className="metric">build websites</p>
					</div>
				</div>
			</div> */}
		</div>

		<div className="portfolio-widget-1 pushtop-120">
			<div className="home-bg-1">
				<div className="container">
					<div className="row top-section">
						<div className="col-md-6 drag-this-left">
							<p className="pretitle">OUR WORKS</p>
							<h3>See the startup companies that grew with us</h3>
							<div className="portfolio-widget-1-tabs">
								<ul>
									<li><a data-filter="*" href="#">ALL</a></li>
									<li><a data-filter=".portfolio-webdesign" href="#">WEB</a></li>
									<li><a data-filter=".portfolio-typo" href="#">MARKETING</a></li>
									<li><a data-filter=".portfolio-branding" href="#">MOBILE</a></li>
									<li><a data-filter=".portfolio-development" href="#">DEVELOPMENT</a></li>
								</ul>
							</div>
						</div>
						<div className="col-md-6 drag-this-right">
							<p>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
								eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
								voluptua.
								At vero eos et accusam et justo duo dolores et ea rebum. Stet
								clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor amet.
							</p>

						</div>
					</div>
				</div>
			</div>
			<div className="container drag-this-up">
				<div id="portfolio-widget-tab-content" className="clearfix">
					<div className="portfolio-item portfolio-webdesign">
						<a href="#"><img src="http://via.placeholder.com/580x380" className="img-fluid" alt="Portfolio item"/></a>
					</div>
					<div className="portfolio-item portfolio-development">
						<a href="#"><img src="http://via.placeholder.com/580x380" className="img-fluid" alt="Portfolio item"/></a>
					</div>
					<div className="portfolio-item portfolio-branding">
						<a href="#"><img src="http://via.placeholder.com/580x380" className="img-fluid" alt="Portfolio item"/></a>
					</div>
					<div className="portfolio-item portfolio-development">
						<a href="#"><img src="http://via.placeholder.com/580x380" className="img-fluid" alt="Portfolio item"/></a>
					</div>
				</div>
				
			</div>
		</div>

		<div className="container">
			<div className="testimonials-widget pushtop-100 drag-this-up">
				<p className="pretitle text-center">CLIENT TESTIMONIALS</p>
				<h3 className="text-center">What our clients say</h3>
				<div className="slick-testimonials">
					<div className="testimonial box-shadow-1">
						<br/>
						<p className="main-text">
							“Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
							invidunt ut labore et dolor erat, sed diam voluptua.”
						</p>
						<div className="testimonial-avatar-holder grad-2">
							<img src="http://via.placeholder.com/70x70" alt="testimonial avatar"/>
						</div>
						<p className="name">Michael Santella</p>
						<p className="job">Founder & CEO of Agilion </p>
					</div>
					<div className="testimonial box-shadow-1">
						<br/>
						<p className="main-text">
							“Duis autem vel eum iriure dolor in hendrerit in vulputate velit
							esse molestie consequat, vel illum dolore eu feugiat nulla.”
						</p>
						<div className="testimonial-avatar-holder grad-2">
							<img src="http://via.placeholder.com/70x70" alt="testimonial avatar"/>
						</div>
						<p className="name">Kareemah Woodard</p>
						<p className="job">Corporate Wellness Consultant</p>
					</div>
					<div className="testimonial box-shadow-1">
						<br/>
						<p className="main-text">
							“Ut wisi enim ad minim veniam, quis nostrud exerci tation
							ullamcorper suscipit lobortis nisl ut aliquip consequat.”
						</p>
						<div className="testimonial-avatar-holder grad-2">
							<img src="http://via.placeholder.com/70x70" alt="testimonial avatar"/>
						</div>
						<p className="name">Bashirat Are</p>
						<p className="job">CEO & Founder of BACF HR Consutling Services</p>
					</div>
					<div className="testimonial box-shadow-1">
						<br/>
						<p className="main-text">
							“Duis autem vel eum iriure dolor in hendrerit in vulputate velit
							esse molestie consequat, vel illum dolore eu feugiat nulla.”
						</p>
						<div className="testimonial-avatar-holder grad-2">
							<img src="http://via.placeholder.com/70x70" alt="testimonial avatar"/>
						</div>
						<p className="name">Nick Houanche </p>
						<p className="job">CEO Vlocator</p>
					</div>
				</div>
			</div>
		</div>
		<div className="team-1-bg">
			<div className="container team-widget-1 pushtop-100 drag-this-up">
				<p className="pretitle">MEET THE TEAM</p>
				<h3>Amazing and talented people work here</h3>
				<ul className="team clearfix">
					<li className="team-member">
						<img src="http://via.placeholder.com/255x255" className="img-fluid" alt="team member"/>
						<div className="member-info">
							<h6>Travis Gray</h6>
							<p className="role">Designer &amp; Developer</p>
							<ul className="team-social">
								<li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
								<li><a href="#"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i className="fa fa-instagram"></i></a></li>
							</ul>
							<a href="#" className="view-profile">view profile</a>
						</div>
					</li>
					<li className="team-member">
						<img src="http://via.placeholder.com/255x255" className="img-fluid" alt="team member"/>
						<div className="member-info">
							<h6>Marlon Moorer</h6>
							<p className="role">Designer &amp; Developer</p>
							<ul className="team-social">
								<li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
								<li><a href="#"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i className="fa fa-instagram"></i></a></li>
							</ul>
							<a href="#" className="view-profile">view profile</a>
						</div>
					</li>
					<li className="team-member">
						<img src="http://via.placeholder.com/255x255" className="img-fluid" alt="team member"/>
						<div className="member-info">
							<h6>Josue Sossou</h6>
							<p className="role">Designer &amp; Developer</p>
							<ul className="team-social">
								<li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
								<li><a href="#"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i className="fa fa-instagram"></i></a></li>
							</ul>
							<a href="#" className="view-profile">view profile</a>
						</div>
					</li>
					<li className="team-member">
						<img src="http://via.placeholder.com/255x255" className="img-fluid" alt="team member"/>
						<div className="member-info">
							<h6>Emmanuel Ogbewe</h6>
							<p className="role">Designer &amp; Developer</p>
							<ul className="team-social">
								<li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
								<li><a href="#"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i className="fa fa-instagram"></i></a></li>
							</ul>
							<a href="#" className="view-profile">view profile</a>
						</div>
					</li>
					<li className="team-member">
						<img src="http://via.placeholder.com/255x255" className="img-fluid" alt="team member"/>
						<div className="member-info">
							<h6>Abyi Cherinet</h6>
							<p className="role">Designer &amp; Developer</p>
							<ul className="team-social">
								<li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
								<li><a href="#"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i className="fa fa-instagram"></i></a></li>
							</ul>
							<a href="#" className="view-profile">view profile</a>
						</div>
					</li>
					
				</ul>
			</div>
		</div>
		<div className="home-bg-1">
			<div className="container services-widget-dark">
				<p className="pretitle text-center">OUR SERVICES</p>
				<h3 className="text-center">What we offer our customers</h3>
				<div className="row">
					<div className="col-md-4 col-sm-6 drag-this-left">
						<i className="fa fa-pencil fa-2x"></i>
						<section>
							<h6>Handcrafted Software Development</h6>
							<p>
								Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
								invidunt ut labore et dolor erat, sed diam voluptua.
							</p>
						</section>
					</div>
					<div className="col-md-4 col-sm-6 drag-this-up">
						<i className="fa fa-briefcase fa-2x"></i>
						<section>
							<h6>Business and SAAS Consulting</h6>
							<p>
								Dignissim qui blandit praesent luptatum zzril delenit
								augue duis dolore te feugait nulla facilisi.
							</p>
						</section>
					</div>
					<div className="col-md-4 col-sm-6 drag-this-right">
						<i className="fa fa-braille fa-2x"></i>
						<section>
							<h6>Mobile Development</h6>
							<p>
								Molor in hendrerit in vulputate velit esse molestie consequat,
								vel illum dolore eu feugiat nulla facilisis at.
							</p>
						</section>
					</div>
					<div className="col-md-4 col-sm-6 drag-this-left">
						<i className="fa fa-flask fa-2x"></i>
						<section>
							<h6>Website Development</h6>
							<p>
								Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
								invidunt ut labore et dolor erat, sed diam voluptua.
							</p>
						</section>
					</div>
					<div className="col-md-4 col-sm-6 drag-this-up">
						<i className="fa fa-bar-chart fa-2x"></i>
						<section>
							<h6>Pixel Perfect Design</h6>
							<p>
								Dignissim qui blandit praesent luptatum zzril delenit
								augue duis dolore te feugait nulla facilisi.
							</p>
						</section>
					</div>
					<div className="col-md-4 col-sm-6 drag-this-right">
						<i className="fa fa-bolt fa-2x"></i>
						<section>
							<h6>Inspirational Work</h6>
							<p>
								Molor in hendrerit in vulputate velit esse molestie consequat,
								vel illum dolore eu feugiat nulla facilisis at.
							</p>
						</section>
					</div>
				</div>
			</div>
		</div>
		<div className="container">
			<div className="slick-partners text-center pushtop-80 flexer drag-this-up">
				<a href="#"><img src="http://via.placeholder.com/160x60" alt="partner"/></a>
				<a href="#"><img src="http://via.placeholder.com/160x60" alt="partner"/></a>
				<a href="#"><img src="http://via.placeholder.com/160x60" alt="partner"/></a>
				<a href="#"><img src="http://via.placeholder.com/160x60" alt="partner"/></a>
				<a href="#"><img src="http://via.placeholder.com/160x60" alt="partner"/></a>
				<a href="#"><img src="http://via.placeholder.com/160x60" alt="partner"/></a>
			</div>

			{/* <div className="contact-widget homepage-widget box-shadow-1 clearfix pushtop-100">
				<p className="pretitle">CONTACT US</p>
				<h3>Get in touch with us</h3>
				<div className="row">
					<div className="col-md-4">
						<label className="required-input">NAME</label>
						<div className="input-container">
							<input type="text" placeholder="enter your name" required/>
							<div className="input-bottom-line"></div>
						</div>
					</div>
					<div className="col-md-4">
						<label className="required-input">E-MAIL ADDRESS</label>
						<div className="input-container">
							<input type="email" placeholder="enter your email" required/>
							<div className="input-bottom-line"></div>
						</div>
					</div>
					<div className="col-md-4">
						<label>WEBSITE</label>
						<div className="input-container">
							<input type="text" placeholder="https://" required/>
							<div className="input-bottom-line"></div>
						</div>
					</div>
				</div>
				<label className="required-input">MESSAGE</label>
				<div className="input-container">
					<textarea placeholder="enter your text"></textarea>
					<div className="input-bottom-line"></div>
				</div>
				<input type="submit" value="Send Message" className="button-style-1 pull-right"/>
			</div> */}
			<Contact />
		</div>

		<br />
		<br />


        </div>
    </React.Fragment>
    )

};

export default Container