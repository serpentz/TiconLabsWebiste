import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
	return (
		<Fragment>
			<div class='container pos-r'>
				<div id='topbar' class='clearfix'>
					<div class='logo pull-left'>
						<h1>
							<a href='index.html'>
								<img
									src='http://via.placeholder.com/86x33'
									alt='pintu'
								/>
							</a>
						</h1>
					</div>
					<nav class='navbar-toggleable-md navbar-dark bg-faded'>
						<div
							class='collapse navbar-collapse nav-mobile'
							id='navbarToggler'
						>
							<ul class='mx-auto top-level clearfix box-shadow-1'>
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
									<a href='portfolio-2cols.html'>
										Portfolio 2 columns
                                    </a>
								</li>
								<li>
									<a href='portfolio-2cols-sidebar.html'>
										Portfolio 2 columns w/ sidebar
                                    </a>
								</li>
								<li>
									<a href='portfolio-3cols.html'>
										Portfolio 3 columns
                                    </a>
								</li>
								<li>
									<a href='portfolio-4cols.html'>
										Portfolio 4 columns
                                    </a>
								</li>
								<li>
									<a href='portfolio-4cols-alt.html'>
										Portfolio 4 columns alternative
                                    </a>
								</li>
								<li>
									<a href='portfolio-single.html'>
										Portfolio single
                                    </a>
								</li>
								<li>
									<a href='portfolio-single-sidebar.html'>
										Portfolio single w/ sidebar
                                    </a>
								</li>
								<li>
									<a href='blog.html'>Our blog</a>
								</li>
								<li>
									<a href='blog-single.html'>Blog post</a>
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
						<div class='nav-desktop'>
							<ul class='mx-auto top-level clearfix'>
								<li class='with-submenu'>
									<a class='link-hover' href='#'>
										Home
                                    </a>
								</li>
								<li class='with-submenu'>
									<a class='link-hover' href=''>
										About Us
                                    </a>
								</li>
								<li class='with-submenu'>
									<a class='link-hover' href=''>
										Portfolio
                                    </a>
									<ul class='submenu'>
										<li>
											<a href='portfolio-2cols.html'>
												Portfolio 2 columns
                                            </a>
										</li>
										<li>
											<a href='portfolio-2cols-sidebar.html'>
												Portfolio 2 columns w/ sidebar
                                            </a>
										</li>
										<li>
											<a href='portfolio-3cols.html'>
												Portfolio 3 columns
                                            </a>
										</li>
										<li>
											<a href='portfolio-4cols.html'>
												Portfolio 4 columns
                                            </a>
										</li>
										<li>
											<a href='portfolio-4cols-alt.html'>
												Portfolio 4 columns alternative
                                            </a>
										</li>
										<li>
											<a href='portfolio-single.html'>
												Portfolio single
                                            </a>
										</li>
										<li>
											<a href='portfolio-single-sidebar.html'>
												Portfolio single w/ sidebar
                                            </a>
										</li>
									</ul>
								</li>
								<li class='with-submenu'>
									<Link class='link-hover' to='/contact'>
										Contact
                                    </Link>
									<ul class='submenu'>
										<li>
											<a href='contact1.html'>
												Contact 1
                                            </a>
										</li>
										<li>
											<a href='contact2.html'>
												Contact 2
                                            </a>
										</li>
										<li>
											<a href='contact3.html'>
												Contact 3
                                            </a>
										</li>
									</ul>
								</li>
								<li class='search'>
									<a href='#' class='search'>
										<i class='fa fa-search zmdi-lg' />
									</a>
									<div class='search-something'>
										<input
											type='search'
											placeholder='search for something'
										/>
										<a href='#'>
											<i class='fa fa-search zmdi-lg' />
										</a>
									</div>
								</li>
								<li class='lang-selection'>
									<a href='#'>EN</a>
									<ul class='lang'>
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
export default Nav
