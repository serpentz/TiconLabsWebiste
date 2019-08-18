import React, { Fragment} from 'react';
import {Link } from "react-router-dom"

function Nav() {
    return (
    <Fragment>
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
								<Link to="/contact" class="link-hover" href="">Contact</Link>
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
		
	</Fragment>
    )
} 
export default Nav