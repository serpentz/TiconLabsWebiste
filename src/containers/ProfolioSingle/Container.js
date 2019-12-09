import React from 'react'
import {withRouter} from "react-router"
import {RxPubSub} from "rx-pubsub";

class Container extends React.Component{



    render(){

  
    return (
        <React.Fragment>
            <body>


                <header className="page">


                    <div className="container text-center">
                        <h2>Our Portfolio Single Sidebar</h2>
                        <p className="page-subtitle">
                            Creative thinking inspires ideas. Ideas inspire change.
			</p>
                    </div>
                </header>

                <main>
                    <div className="container portfolio-single">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="blog-post-slick slick-initialized slick-slider"><i className="fa fa-chevron-left slick-arrow" ></i>
                                    <div aria-live="polite" className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: "3480px", transform: "translate3d(-1740px, 0px, 0px)", role: "listbox" }}>
                                        <img src="http://via.placeholder.com/1170x500" className="img-fluid slick-slide slick-cloned" alt="Portfolio image" data-slick-index="-1" aria-hidden="true" tabindex="-1" style={{width: "870px"}} />
                                        <img src="http://via.placeholder.com/1170x500" className="img-fluid slick-slide" alt="Portfolio image" data-slick-index="0" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide00" style={{width: "870px"}} />
                                        <img src="http://via.placeholder.com/1170x500" className="img-fluid slick-slide slick-current slick-active" alt="Portfolio image" data-slick-index="1" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide01" style={{width: "870px"}} />
                                        <img src="http://via.placeholder.com/1170x500" className="img-fluid slick-slide slick-cloned" alt="Portfolio image" data-slick-index="2" aria-hidden="true" tabindex="-1" style={{width: "870px"}} />

                                    </div></div>

                                    <i className="fa fa-chevron-right slick-arrow" ></i></div>
                                <div className="post-meta">
                                    <span className="post-date">11/06/2018</span>
                                    |
						<span className="post-author">by Jonathan Doe</span>
                                </div>
                                <h3>{this.props.match.params.profile_id}</h3>
                                <p>
                                    Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor erat, sed
                                    diam voluptua. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
                                    velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                                    et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
                                    feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
                                    zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
					</p>
                                <div className="portfolio-single-share pushtop-60 clearfix">
                                    <div className="social">
                                        <a href="#" className="social-toggle"><i className="fa fa-share-alt fa-lg"></i></a>
                                        <ul className="social-links">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fa fa-feed"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="related-projects portfolio-widget-3 pushtop-60">
                                    <h3>Related Projects</h3>
                                    <div className="row no-gutters">
                                        <div className="col-sm-6">
                                            <div className="portfolio-item-container">
                                                <img className="img-fluid" src="http://via.placeholder.com/445x290" alt="Portfolio item" />
                                                <div className="portfolio-item-info">
                                                    <h6>Cosmetics Packaging</h6>
                                                    <p>Branding</p>
                                                    <a href="#">view project</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="portfolio-item-container">
                                                <img className="img-fluid" src="http://via.placeholder.com/445x290" alt="Portfolio item" />
                                                <div className="portfolio-item-info">
                                                    <h6>Cosmetics Packaging</h6>
                                                    <p>Branding</p>
                                                    <a href="#">view project</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <aside className="portfolio-single-aside">
                                    <h4>PROJECT DETAILS</h4>
                                    <ul>
                                        <li><strong>Designer: </strong>Jonathan Doe</li>
                                        <li><strong>Art Direction: </strong>KL-Webmedia</li>
                                        <li><strong>Client: </strong>N<sup>o</sup>8 Brandminute</li>
                                        <li><strong>Date: </strong>26/04/2018</li>
                                        <li><strong>Website: </strong>https://themeforest.net</li>
                                    </ul>
                                    <div className="aside-widget instagram-feed">
                                        <h4>INSTAGRAM FEED</h4>
                                        <ul className="instagram-feed clearfix">
                                            <li><a href="#"><img src="http://via.placeholder.com/64x65" alt="Instagram image" /></a></li>
                                            <li><a href="#"><img src="http://via.placeholder.com/64x65" alt="Instagram image" /></a></li>
                                            <li><a href="#"><img src="http://via.placeholder.com/64x65" alt="Instagram image" /></a></li>
                                            <li><a href="#"><img src="http://via.placeholder.com/64x65" alt="Instagram image" /></a></li>
                                            <li><a href="#"><img src="http://via.placeholder.com/64x65" alt="Instagram image" /></a></li>
                                            <li><a href="#"><img src="http://via.placeholder.com/64x65" alt="Instagram image" /></a></li>
                                            <li><a href="#"><img src="http://via.placeholder.com/64x65" alt="Instagram image" /></a></li>
                                            <li><a href="#"><img src="http://via.placeholder.com/64x65" alt="Instagram image" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="aside-widget popular-tags">
                                        <h4>POPULAR TAGS</h4>
                                        <ul>
                                            <li><a href="#">CREATIVE</a></li>
                                            <li><a href="#">WORDPRESS THEME</a></li>
                                            <li><a href="#">WEBSITE DESIGN</a></li>
                                            <li><a href="#">HTML5</a></li>
                                            <li><a href="#">MULTI-PURPOSE</a></li>
                                            <li><a href="#">TEMPLATE</a></li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </main>




            </body>
        </React.Fragment>

    )
    }
}

export default withRouter(Container)