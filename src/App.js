import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
{

  // 	<div id="page-loader">
	// 	<i class="fa fa-cog fa-spin grad-text grad-2"></i>
	// </div>

}

	<header>
		<div class="sidebar-nav">
			<a href="#" class="sidebar-nav-toggler">
				<img src="http://via.placeholder.com/71x43" alt="topbar-toggler"/>
			</a>
			<aside class="sidebar-nav-body">
				<h6>SIDEBAR NAVIGATION</h6>
				<span class="subtitle">Design &amp; Development</span>
				<ul>
					<li><a href="#">Homepage Layout 01</a></li>
					<li><a href="#">Homepage Layout 02</a></li>
					<li><a href="#">Homepage Layout 03</a></li>
					<li><a href="#">Homepage Layout 04</a></li>
				</ul>

				<h6>TEXT PARAGRAPH</h6>
				<p class="sidebar-text">
					You can see how he solves his problems. You can also see
					what's wrong. Young children, especially, have enormous
					creativity, and whatever's in them rises to the surface in free play.
				</p>

				<h6>PREVIEW IMAGE</h6>
				<span class="subtitle">Website Image</span>
				<img class="img-fluid menu-image-1" src="http://via.placeholder.com/218x165" alt="menu image"/>
			</aside>
		</div>
		<div class="container pos-r">
			<div id="topbar" class="clearfix">
				<div class="logo pull-left">
					<h1><a href="index.html"><img src="http://via.placeholder.com/86x33" alt="pintu"/></a></h1>
				</div>
				<nav class="navbar-toggleable-md navbar-dark bg-faded">
					<div class="collapse navbar-collapse nav-mobile" id="navbarToggler">
						<ul class="mx-auto top-level clearfix box-shadow-1">
							<li><a href="index1.html">Homepage Layout 01</a></li>
							<li><a href="index2.html">Homepage Layout 02</a></li>
							<li><a href="index3.html">Homepage Layout 03</a></li>
							<li><a href="index4.html">Homepage Layout 04</a></li>
							<li><a href="services1.html">Our services 1</a></li>
							<li><a href="services2.html">Our services 2</a></li>
							<li><a href="about1.html">About us 1</a></li>
							<li><a href="about2.html">About us 2</a></li>
							<li><a href="portfolio-2cols.html">Portfolio 2 columns</a></li>
							<li><a href="portfolio-2cols-sidebar.html">Portfolio 2 columns w/ sidebar</a></li>
							<li><a href="portfolio-3cols.html">Portfolio 3 columns</a></li>
							<li><a href="portfolio-4cols.html">Portfolio 4 columns</a></li>
							<li><a href="portfolio-4cols-alt.html">Portfolio 4 columns alternative</a></li>
							<li><a href="portfolio-single.html">Portfolio single</a></li>
							<li><a href="portfolio-single-sidebar.html">Portfolio single w/ sidebar</a></li>
							<li><a href="blog.html">Our blog</a></li>
							<li><a href="blog-single.html">Blog post</a></li>
							<li><a href="contact1.html">Contact 1</a></li>
							<li><a href="contact2.html">Contact 2</a></li>
							<li><a href="contact3.html">Contact 3</a></li>
						</ul>
					</div>
					<div class="nav-desktop">
						<ul class="mx-auto top-level clearfix">
							<li class="with-submenu">
								<a class="link-hover" href="#">Home</a>
								<div class="submenu mega-menu">
									<div class="container">
										<div class="row">
											<div class="col-md-3">
												<div class="mega-menu-inner">
													<h6>HOMEPAGE REVIEWS</h6>
													<span class="subtitle">For Agencies &amp; Companies</span>
													<ul>
														<li><a href="index1.html">Homepage Layout 01</a></li>
														<li><a href="index2.html">Homepage Layout 02</a></li>
														<li><a href="index3.html">Homepage Layout 03</a></li>
														<li><a href="index4.html">Homepage Layout 04</a></li>
													</ul>
												</div>
											</div>
											<div class="col-md-3">
												<div class="mega-menu-inner">
													<h6>OUR SERVICES</h6>
													<span class="subtitle">Design &amp; Development</span>
													<ul>
														<li><a href="#">Website Design</a></li>
														<li><a href="#">Wordpress Development</a></li>
														<li><a href="#">Graphic Design</a></li>
														<li><a href="#">Coorporate identity</a></li>
													</ul>
												</div>
											</div>
											<div class="col-md-3">
												<div class="mega-menu-inner">
													<h6>PINTU PAGES</h6>
													<span class="subtitle">Services &amp; Stuff </span>
													<ul>
														<li><a href="#">Our Services</a></li>
														<li><a href="#">Our Blog </a></li>
														<li><a href="#">Our Portfolio</a></li>
														<li><a href="#">About Us</a></li>
													</ul>
												</div>
											</div>
											<div class="col-md-3">
												<div class="mega-menu-inner">
													<h6>PINTU PREVIEW IMAGE</h6>
													<span class="subtitle">Homepage Preview Image</span>
													<img class="img-fluid menu-image-1" src="http://via.placeholder.com/218x165" alt="menu image"/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="with-submenu">
								<a class="link-hover" href="">About Us</a>
								<ul class="submenu simple-menu">
									<li><a href="#">About Us</a></li>
									<li><a href="#">What We Do</a></li>
									<li><a href="#">Who We Are</a></li>
									<li><a href="#">Our Team</a></li>
									<li><a href="#">Meet The Crew</a></li>
									<li><a href="#">Our Services</a></li>
									<li><a href="#">What We Offer</a></li>
									<li><a href="#">How We Work</a></li>
									<li><a href="#">Our Process</a></li>
									<li><a href="#">Our Clients</a></li>
									<li><a href="#">FAQ</a></li>
									<li><a href="#">Coming Soon</a></li>
									<li><a href="#">Coming Soon 2</a></li>
									<li><a href="#">Contact Page</a></li>
									<li><a href="#">Contact Page 2</a></li>
								</ul>
							</li>
							<li class="with-submenu">
								<a class="link-hover" href="">Pages</a>
								<ul class="submenu">
									<li><a href="services1.html">Our Services 1</a></li>
									<li><a href="services2.html">Our Services 2</a></li>
									<li><a href="blog.html">Blog</a></li>
									<li><a href="blog-single.html">Blog Post</a></li>
									<li><a href="about1.html">About 1</a></li>
									<li><a href="about2.html">About 2</a></li>
								</ul>
							</li>
							<li class="with-submenu">
								<a class="link-hover" href="">Portfolio</a>
								<ul class="submenu">
									<li><a href="portfolio-2cols.html">Portfolio 2 columns</a></li>
									<li><a href="portfolio-2cols-sidebar.html">Portfolio 2 columns w/ sidebar</a></li>
									<li><a href="portfolio-3cols.html">Portfolio 3 columns</a></li>
									<li><a href="portfolio-4cols.html">Portfolio 4 columns</a></li>
									<li><a href="portfolio-4cols-alt.html">Portfolio 4 columns alternative</a></li>
									<li><a href="portfolio-single.html">Portfolio single</a></li>
									<li><a href="portfolio-single-sidebar.html">Portfolio single w/ sidebar</a></li>
								</ul>
							</li>
							<li class="with-submenu">
								<a class="link-hover" href="">Contact</a>
								<ul class="submenu">
									<li><a href="contact1.html">Contact 1</a></li>
									<li><a href="contact2.html">Contact 2</a></li>
									<li><a href="contact3.html">Contact 3</a></li>
								</ul>
							</li>
							<li class="cart">
								<a href="#"><i class="fa fa-briefcase"></i><span>4</span></a>
								<div class="cart-container">
									<h6>SHOPPING CART (2)</h6>
									<div class="cart-item clearfix">
										<img src="http://via.placeholder.com/70x70" alt="cart item" class="pull-left"/>
										<a href="#">How to become an UX Designer</a>
										<p class="quantity">1x $39,99</p>
										<button class="remove">x DELETE</button>
									</div>
									<div class="cart-item clearfix">
										<img src="http://via.placeholder.com/70x70" alt="cart item" class="pull-left"/>
										<a href="#">How to become an UX Designer</a>
										<p class="quantity">1x $39,99</p>
										<button class="remove">x DELETE</button>
									</div>
									<div class="cart-controls text-center">
										<a href="#" class="checkout">CHECKOUT</a>
										<a href="#" class="viewcart">VIEW CART</a>
										<a href="#" class="addcourse">+ ADD ITEM</a>
									</div>
								</div>
							</li>
							<li class="search">
								<a href="#" class="search"><i class="fa fa-search zmdi-lg"></i></a>
								<div class="search-something">
									<input type="search" placeholder="search for something"/>
									<a href="#"><i class="fa fa-search zmdi-lg"></i></a>
								</div>
							</li>
							<li class="lang-selection">
								<a href="#">EN</a>
								<ul class="lang">
									<li><a href="#">DE</a></li>
									<li><a href="#">FR</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
		<div class="header-content fullheight">
			<div class="slick-header fullheight">
				<div class="header-slide slide-2">
					<div class="container">
						<img src="http://via.placeholder.com/266x323" class="pull-left header-p" alt="P"/>
						<p class="pre-title">Welcome to Pintu</p>
						<h2>We build amazing<span>Design</span></h2>
						<a href="#" class="header-button">View portfolio</a>
						<a class="header-link pushleft" href="#">Check our easy design process and actions</a>
					</div>
				</div>
			</div>
		</div>
	</header>

	<main>

		<div class="container">

			<div class="banner-widget-container banner-background box-shadow-1 text-center pulltop-140">
				<div class="row">
					<div class="col-md-4">
						<div class="banner-widget">
							<div class="image-container">
								<img src="http://via.placeholder.com/110x120" alt="Banner image"/>
							</div>
							<h6>We are creators</h6>
							<p>
								Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
								invidunt ut labore et dolor erat, sed diam voluptua.
							</p>
						</div>
					</div>
					<div class="col-md-4">
						<div class="banner-widget">
							<div class="image-container">
								<img src="http://via.placeholder.com/110x120" alt="Banner image"/>
							</div>
							<h6>We think big</h6>
							<p>
								Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
								invidunt ut labore et dolor erat, sed diam voluptua.
							</p>
						</div>
					</div>
					<div class="col-md-4">
						<div class="banner-widget">
							<div class="image-container">
								<img src="http://via.placeholder.com/110x120" alt="Banner image"/>
							</div>
							<h6>We are organized</h6>
							<p>
								Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
								invidunt ut labore et dolor erat, sed diam voluptua.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="row pushtop-130 about1">
				<div class="col-lg-5 drag-this-left">
					<p class="pretitle">WHAT WE DO</p>
					<h3>We create amazing design with passion</h3>
					<div class="about1-inner box-shadow-1 grad-1">
						<p>
							&quot; Helping small and big companies to grow
							their business with a modern design. &quot;
						</p>
						<a href="#">
							<span class="count">1.153</span>
							<div class="small-text">
								happy clients &amp;
								satisfied customers
							</div>
							<i class="fa fa-caret-right fa-2x"></i>
						</a>
					</div>
				</div>
				<div class="col-lg-7">
					<iframe src="https://www.youtube.com/embed/v4oN4DuR7YU?rel=0"></iframe>
				</div>
			</div>

			<div class="statistics text-center pushtop-120">
				<p class="pretitle">SIMPLE STATISTICS</p>
				<div class="row pushtop-60">
					<div class="col-md-3 statistic drag-this-left">
						<p class="count">1.300+</p>
						<p class="metric">satisfied customers</p>
					</div>
					<div class="col-md-3 statistic drag-this-up">
						<p class="count">3.242</p>
						<p class="metric">created designs assets</p>
					</div>
					<div class="col-md-3 statistic drag-this-up">
						<p class="count">12M</p>
						<p class="metric">lines of code</p>
					</div>
					<div class="col-md-3 statistic drag-this-right">
						<p class="count">284</p>
						<p class="metric">build websites</p>
					</div>
				</div>
			</div>
		</div>

		<div class="portfolio-widget-1 pushtop-120">
			<div class="home-bg-1">
				<div class="container">
					<div class="row top-section">
						<div class="col-md-6 drag-this-left">
							<p class="pretitle">OUR WORKS</p>
							<h3>See the companies that grew with us</h3>
							<div class="portfolio-widget-1-tabs">
								<ul>
									<li><a data-filter="*" href="#">ALL</a></li>
									<li><a data-filter=".portfolio-webdesign" href="#">WEBDESIGN</a></li>
									<li><a data-filter=".portfolio-typo" href="#">TYPO</a></li>
									<li><a data-filter=".portfolio-branding" href="#">BRANDING</a></li>
									<li><a data-filter=".portfolio-development" href="#">DEVELOPMENT</a></li>
								</ul>
							</div>
						</div>
						<div class="col-md-6 drag-this-right">
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
			<div class="container drag-this-up">
				<div id="portfolio-widget-tab-content" class="clearfix">
					<div class="portfolio-item portfolio-webdesign">
						<a href="#"><img src="http://via.placeholder.com/580x380" class="img-fluid" alt="Portfolio item"/></a>
					</div>
					<div class="portfolio-item portfolio-development">
						<a href="#"><img src="http://via.placeholder.com/580x380" class="img-fluid" alt="Portfolio item"/></a>
					</div>
					<div class="portfolio-item portfolio-branding">
						<a href="#"><img src="http://via.placeholder.com/580x380" class="img-fluid" alt="Portfolio item"/></a>
					</div>
					<div class="portfolio-item portfolio-development">
						<a href="#"><img src="http://via.placeholder.com/580x380" class="img-fluid" alt="Portfolio item"/></a>
					</div>
				</div>
				<a class="mx-auto button-style-1 load-more" href="#">LOAD MORE</a>
			</div>
		</div>

		<div class="container">
			<div class="testimonials-widget pushtop-100 drag-this-up">
				<p class="pretitle text-center">CLIENT TESTIMONIALS</p>
				<h3 class="text-center">What our clients say</h3>
				<div class="slick-testimonials">
					<div class="testimonial box-shadow-1">
						<span class="quote-icon"><img src="http://via.placeholder.com/24x17" alt="quote icon"/></span>
						<p class="main-text">
							“Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
							invidunt ut labore et dolor erat, sed diam voluptua.”
						</p>
						<div class="testimonial-avatar-holder grad-2">
							<img src="http://via.placeholder.com/70x70" alt="testimonial avatar"/>
						</div>
						<p class="name">Alexandra Jones</p>
						<p class="job">Co-Founder of Scientec</p>
					</div>
					<div class="testimonial box-shadow-1">
						<span class="quote-icon"><img src="http://via.placeholder.com/24x17" alt="quote icon"/></span>
						<p class="main-text">
							“Duis autem vel eum iriure dolor in hendrerit in vulputate velit
							esse molestie consequat, vel illum dolore eu feugiat nulla.”
						</p>
						<div class="testimonial-avatar-holder grad-2">
							<img src="http://via.placeholder.com/70x70" alt="testimonial avatar"/>
						</div>
						<p class="name">Marcus Kample</p>
						<p class="job">Designer at Monarc</p>
					</div>
					<div class="testimonial box-shadow-1">
						<span class="quote-icon"><img src="http://via.placeholder.com/24x17" alt="quote icon"/></span>
						<p class="main-text">
							“Ut wisi enim ad minim veniam, quis nostrud exerci tation
							ullamcorper suscipit lobortis nisl ut aliquip consequat.”
						</p>
						<div class="testimonial-avatar-holder grad-2">
							<img src="http://via.placeholder.com/70x70" alt="testimonial avatar"/>
						</div>
						<p class="name">Alexandra Jones</p>
						<p class="job">Co-Founder of Scientec</p>
					</div>
					<div class="testimonial box-shadow-1">
						<span class="quote-icon"><img src="http://via.placeholder.com/24x17" alt="quote icon"/></span>
						<p class="main-text">
							“Duis autem vel eum iriure dolor in hendrerit in vulputate velit
							esse molestie consequat, vel illum dolore eu feugiat nulla.”
						</p>
						<div class="testimonial-avatar-holder grad-2">
							<img src="http://via.placeholder.com/70x70" alt="testimonial avatar"/>
						</div>
						<p class="name">Marcus Kample</p>
						<p class="job">Designer at Monarc</p>
					</div>
				</div>
			</div>
		</div>
		<div class="team-1-bg">
			<div class="container team-widget-1 pushtop-100 drag-this-up">
				<p class="pretitle">MEET THE TEAM</p>
				<h3>Amazing and talented people work here</h3>
				<ul class="team clearfix">
					<li class="team-member">
						<img src="http://via.placeholder.com/255x255" class="img-fluid" alt="team member"/>
						<div class="member-info">
							<h6>John Betlehem</h6>
							<p class="role">Designer &amp; Developer</p>
							<ul class="team-social">
								<li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i class="fa fa-instagram"></i></a></li>
							</ul>
							<a href="#" class="view-profile">view profile</a>
						</div>
					</li>
					<li class="team-member">
						<img src="http://via.placeholder.com/255x255" class="img-fluid" alt="team member"/>
						<div class="member-info">
							<h6>John Betlehem</h6>
							<p class="role">Designer &amp; Developer</p>
							<ul class="team-social">
								<li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i class="fa fa-instagram"></i></a></li>
							</ul>
							<a href="#" class="view-profile">view profile</a>
						</div>
					</li>
					<li class="team-member">
						<img src="http://via.placeholder.com/255x255" class="img-fluid" alt="team member"/>
						<div class="member-info">
							<h6>John Betlehem</h6>
							<p class="role">Designer &amp; Developer</p>
							<ul class="team-social">
								<li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i class="fa fa-instagram"></i></a></li>
							</ul>
							<a href="#" class="view-profile">view profile</a>
						</div>
					</li>
					<li class="team-member">
						<img src="http://via.placeholder.com/255x255" class="img-fluid" alt="team member"/>
						<div class="member-info">
							<h6>John Betlehem</h6>
							<p class="role">Designer &amp; Developer</p>
							<ul class="team-social">
								<li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i class="fa fa-instagram"></i></a></li>
							</ul>
							<a href="#" class="view-profile">view profile</a>
						</div>
					</li>
					<li class="team-member">
						<img src="http://via.placeholder.com/255x255" class="img-fluid" alt="team member"/>
						<div class="member-info">
							<h6>John Betlehem</h6>
							<p class="role">Designer &amp; Developer</p>
							<ul class="team-social">
								<li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i class="fa fa-instagram"></i></a></li>
							</ul>
							<a href="#" class="view-profile">view profile</a>
						</div>
					</li>
					<li class="team-member">
						<img src="http://via.placeholder.com/255x255" class="img-fluid" alt="team member"/>
						<div class="member-info">
							<h6>John Betlehem</h6>
							<p class="role">Designer &amp; Developer</p>
							<ul class="team-social">
								<li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i class="fa fa-instagram"></i></a></li>
							</ul>
							<a href="#" class="view-profile">view profile</a>
						</div>
					</li>
					<li class="team-member">
						<img src="http://via.placeholder.com/255x255" class="img-fluid" alt="team member"/>
						<div class="member-info">
							<h6>John Betlehem</h6>
							<p class="role">Designer &amp; Developer</p>
							<ul class="team-social">
								<li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i class="fa fa-instagram"></i></a></li>
							</ul>
							<a href="#" class="view-profile">view profile</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="home-bg-1">
			<div class="container services-widget-dark">
				<p class="pretitle text-center">OUR SERVICES</p>
				<h3 class="text-center">What we offer our customers</h3>
				<div class="row">
					<div class="col-md-4 col-sm-6 drag-this-left">
						<i class="fa fa-pencil fa-2x"></i>
						<section>
							<h6>Handcrafter Conceptions</h6>
							<p>
								Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
								invidunt ut labore et dolor erat, sed diam voluptua.
							</p>
						</section>
					</div>
					<div class="col-md-4 col-sm-6 drag-this-up">
						<i class="fa fa-briefcase fa-2x"></i>
						<section>
							<h6>Business Consulting</h6>
							<p>
								Dignissim qui blandit praesent luptatum zzril delenit
								augue duis dolore te feugait nulla facilisi.
							</p>
						</section>
					</div>
					<div class="col-md-4 col-sm-6 drag-this-right">
						<i class="fa fa-braille fa-2x"></i>
						<section>
							<h6>Branding Ideas</h6>
							<p>
								Molor in hendrerit in vulputate velit esse molestie consequat,
								vel illum dolore eu feugiat nulla facilisis at.
							</p>
						</section>
					</div>
					<div class="col-md-4 col-sm-6 drag-this-left">
						<i class="fa fa-flask fa-2x"></i>
						<section>
							<h6>Create Inventions</h6>
							<p>
								Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
								invidunt ut labore et dolor erat, sed diam voluptua.
							</p>
						</section>
					</div>
					<div class="col-md-4 col-sm-6 drag-this-up">
						<i class="fa fa-bar-chart fa-2x"></i>
						<section>
							<h6>Pixel Perfect Design</h6>
							<p>
								Dignissim qui blandit praesent luptatum zzril delenit
								augue duis dolore te feugait nulla facilisi.
							</p>
						</section>
					</div>
					<div class="col-md-4 col-sm-6 drag-this-right">
						<i class="fa fa-bolt fa-2x"></i>
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
		<div class="container">
			<div class="slick-partners text-center pushtop-80 flexer drag-this-up">
				<a href="#"><img src="http://via.placeholder.com/160x60" alt="partner"/></a>
				<a href="#"><img src="http://via.placeholder.com/160x60" alt="partner"/></a>
				<a href="#"><img src="http://via.placeholder.com/160x60" alt="partner"/></a>
				<a href="#"><img src="http://via.placeholder.com/160x60" alt="partner"/></a>
				<a href="#"><img src="http://via.placeholder.com/160x60" alt="partner"/></a>
				<a href="#"><img src="http://via.placeholder.com/160x60" alt="partner"/></a>
			</div>

			<div class="contact-widget homepage-widget box-shadow-1 clearfix pushtop-100">
				<p class="pretitle">CONTACT US</p>
				<h3>Get in touch with us</h3>
				<div class="row">
					<div class="col-md-4">
						<label class="required-input">NAME</label>
						<div class="input-container">
							<input type="text" placeholder="enter your name" required/>
							<div class="input-bottom-line"></div>
						</div>
					</div>
					<div class="col-md-4">
						<label class="required-input">E-MAIL ADDRESS</label>
						<div class="input-container">
							<input type="email" placeholder="enter your email" required/>
							<div class="input-bottom-line"></div>
						</div>
					</div>
					<div class="col-md-4">
						<label>WEBSITE</label>
						<div class="input-container">
							<input type="text" placeholder="https://" required/>
							<div class="input-bottom-line"></div>
						</div>
					</div>
				</div>
				<label class="required-input">MESSAGE</label>
				<div class="input-container">
					<textarea placeholder="enter your text"></textarea>
					<div class="input-bottom-line"></div>
				</div>
				<input type="submit" value="Send Message" class="button-style-1 pull-right"/>
			</div>
		</div>

		<div id="googleMap"></div>


	</main>

	<footer>

		<div class="footer-main grad-3">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-sm-6 col-12 contact-details">
						<h6>Contact Info</h6>
						<p class="footer-address"><i class="fa fa-map-marker"></i>123 Main Street New York, NY 01001 </p>
						<p class="footer-email"><span>@</span>support@email.com </p>
						<p class="footer-phone"><i class="fa fa-phone"></i>1 (800) 123 4567</p>

					</div>
					<div class="col-lg-3 col-sm-6 col-12">
						<h6>QuickLinks</h6>
						<ul>
							<li><a href="#" class="link-hover">Terms and Conditions</a></li>
							<li><a href="#" class="link-hover">Our Services</a></li>
							<li><a href="#" class="link-hover">Privacy Policy</a></li>
							<li><a href="#" class="link-hover">Disclaimer</a></li>
						</ul>
					</div>
					<div class="col-lg-3 col-sm-6 col-12">
						<h6>Instagram Feed</h6>
						<ul class="instagram-feed">
							<li><a href="#"><img src="http://via.placeholder.com/64x65" alt="Instagram image"/></a></li>
							<li><a href="#"><img src="http://via.placeholder.com/64x65" alt="Instagram image"/></a></li>
							<li><a href="#"><img src="http://via.placeholder.com/64x65" alt="Instagram image"/></a></li>
							<li><a href="#"><img src="http://via.placeholder.com/64x65" alt="Instagram image"/></a></li>
							<li><a href="#"><img src="http://via.placeholder.com/64x65" alt="Instagram image"/></a></li>
							<li><a href="#"><img src="http://via.placeholder.com/64x65" alt="Instagram image"/></a></li>
							<li><a href="#"><img src="http://via.placeholder.com/64x65" alt="Instagram image"/></a></li>
							<li><a href="#"><img src="http://via.placeholder.com/64x65" alt="Instagram image"/></a></li>
						</ul>
					</div>
					<div class="col-lg-3 col-sm-6 col-12">
						<h6>Connect with us</h6>
						<ul class="footer-social">
							<li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
							<li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
							<li><a href="#"><i class="fa fa-instagram"></i></a></li>
							<li><a href="#"><i class="fa fa-rss"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-bottom">
			<div class="container">
				<p class="copyright-text">Copyright 2018 © Pintu - PSD Template | All Rights Reserved</p>
			</div>
		</div>

	</footer>

</div>
  );
}

export default App;
