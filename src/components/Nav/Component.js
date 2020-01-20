import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { logotext } from "../../assets"
import {RxPubSub} from "rx-pubsub";


class Nav extends React.Component {

	state ={
		nav_search_value:""
	}

	componentDidMount(){
		RxPubSub.subscribe("nav_search_value", (e) => this.setState({nav_search_value: e}))
	}

	toogleSideBar = () => {
		let element = document.getElementById("sideNav")
		element.classList.toggle("active");
	}

	onChange(e){
		RxPubSub.publish("nav_search_value",e.target.value)	
	}

	render() {
		return (
			<Fragment>
				<div className="sidebar-nav">
					<span onClick={this.toogleSideBar} className="sidebar-nav-toggler">
						<img src={logotext} alt="topbar-toggler" />
					</span>
					<aside id="sideNav" className="sidebar-nav-body">
						<h6>SIDEBAR NAVIGATION</h6>
						<span className="subtitle">Design &amp; Development</span>
						<ul>
							<li><a href="#">Homepage Layout 01</a></li>
							<li><a href="#">Homepage Layout 02</a></li>
							<li><a href="#">Homepage Layout 03</a></li>
							<li><a href="#">Homepage Layout 04</a></li>
						</ul>
						<hr />
						<h6>TEXT PARAGRAPH</h6>
						<p className="sidebar-text">
							You can see how he solves his problems. You can also see
							what's wrong. Young children, especially, have enormous
							creativity, and whatever's in them rises to the surface in free play.
					</p>
						<hr />
						<h6>PREVIEW IMAGE</h6>
						<span className="subtitle">Website Image</span>
						<img className="img-fluid menu-image-1" src="http://via.placeholder.com/218x165" alt="menu image" />
					</aside>
				</div>

				<div className='container pos-r'>
					<div id='topbar' className='clearfix'>
						<div className='logo pull-left'>
							<h1>
								<Link to='/'>
									<img
										src={logotext}
										alt='pintu'
									/>
								</Link>
							</h1>
						</div>
						<nav className='navbar-toggleable-md navbar-dark bg-faded'>
							<div
								className='collapse navbar-collapse nav-mobile'
								id='navbarToggler'
							>
								<ul className='mx-auto top-level clearfix box-shadow-1'>
									<li>
										<a href='index1.html'>Homepage Layout 01</a>
									</li>
									<li>
										<a href='index2.html'>Homepage Layout 02</a>
									</li>
									<li>
										<a href='index3.html'>Homepage Layout 03</a>
									</li>
									<li>
										<a href='index4.html'>Homepage Layout 04</a>
									</li>
									<li>
										<a href='services1.html'>Our services 1</a>
									</li>
									<li>
										<a href='services2.html'>Our services 2</a>
									</li>
									<li>
										<a href='about1.html'>About us 1</a>
									</li>
									<li>
										<a href='about2.html'>About us 2</a>
									</li>
									<li>
										<a href='portfolio-2cols-sidebar.html'>
											Big client 1
                                    </a>
									</li>
									<li>
										<a href='portfolio-3cols.html'>
											Big client 2
                                    </a>
									</li>
									<li>
										<a href='portfolio-4cols.html'>
											Big client 3
                                    </a>
									</li>
									<li>
										<a href='blog.html'>Our blog</a>
									</li>

									<li>
										<a href='contact1.html'>Contact 1</a>
									</li>
									<li>
										<a href='contact2.html'>Contact 2</a>
									</li>
									<li>
										<a href='contact3.html'>Contact 3</a>
									</li>
								</ul>
							</div>
							<div className='nav-desktop'>
								<ul className='mx-auto top-level clearfix'>
									<li className='with-submenu'>
										<Link className='link-hover' to='/'>
											Home
                                    </Link>
									</li>
									<li className='with-submenu'>
										<Link className='link-hover' to='/about'>
											About Us
                                    </Link>
									</li>
									<li className='with-submenu'>
										<Link className='link-hover' to='/portfolio'>
											Portfolio
                                    </Link>
										<ul className='submenu'>
											<li>
												<a href='portfolio-2cols.html'>
													Big Client 1
                                            </a>
											</li>
											<li>
												<a href='portfolio-2cols-sidebar.html'>
													Big Client 2
                                            </a>
											</li>
											<li>
												<a href='portfolio-3cols.html'>
													Big Client 3
                                            </a>
											</li>

										</ul>
									</li>
									<li className='with-submenu'>
										<Link className='link-hover' to='/contact'>
											Contact
                                    </Link>
										<ul className='submenu'>
											<li>
												<Link to='/contact'>
													CEO
                                            </Link>
											</li>
											<li>
												<Link to='/contact'>
													Marketing
                                            </Link>
											</li>

										</ul>
									</li>
									<li className='search'>
										<a href='#' className='search'>
											<i className='fa fa-search zmdi-lg' />
										</a>
										<div className='search-something'>
											<input
												type='search'
												onChange={this.onChange}
												value={this.state.nav_search_value}
												placeholder='search for something'
											/>
											<a href='#'>
												<i className='fa fa-search zmdi-lg' />
											</a>
										</div>
									</li>
									<li className='lang-selection'>
										<a href='#'>EN</a>
										<ul className='lang'>
											<li>
												<a href='#'>DE</a>
											</li>
											<li>
												<a href='#'>FR</a>
											</li>
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
}
export default Nav
