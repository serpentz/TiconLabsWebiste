import React from "react"
import {Link} from "react-router-dom"


function Container() {
    return (
        <div>
            <header className="page">
                <div className="container text-center">
                    <h2>Our Portfolio 2 columns</h2>
                    <p className="page-subtitle">
                        Creative thinking inspires ideas. Ideas inspire change.
                     </p>
                </div>
            </header>
            <main>
                <div className="container">
                    <div className="portfolio-widget-3 cols-2 portfolio-page pushtop-120 drag-this-up drag-up">
                        <div className="portfolio-widget-1-tabs text-center clearfix">
                            <ul className="clearfix">
                                <li><a data-filter="*" href="#">ALL</a></li>
                                <li><a data-filter=".portfolio-webdesign" href="#">WEBDESIGN</a></li>
                                <li><a data-filter=".portfolio-typo" href="#">TYPO</a></li>
                                <li><a data-filter=".portfolio-branding" href="#">BRANDING</a></li>
                                <li><a data-filter=".portfolio-development" href="#">DEVELOPMENT</a></li>
                            </ul>
                        </div>
                        <div className="drag-this-up text-center drag-up">
                            <div className="row no-gutters" id="portfolio-widget-tab-content">
                                <div className="col-md-6 portfolio-webdesign">
                                    <div className="portfolio-item-container">
                                        <img className="img-fluid" src="http://via.placeholder.com/635x400" alt="Portfolio item" />
                                        <div className="portfolio-item-info">
                                            <h6>Cosmetics Packaging</h6>
                                            <p>Branding</p>
                                            <Link to="/portfolio/5555">view project</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 portfolio-branding">
                                    <div className="portfolio-item-container">
                                        <img className="img-fluid" src="http://via.placeholder.com/635x400" alt="Portfolio item" />
                                        <div className="portfolio-item-info">
                                            <h6>Cosmetics Packaging</h6>
                                            <p>Branding</p>
                                            <a href="#">view project</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 portfolio-webdesign">
                                    <div className="portfolio-item-container">
                                        <img className="img-fluid" src="http://via.placeholder.com/635x400" alt="Portfolio item" />
                                        <div className="portfolio-item-info">
                                            <h6>Cosmetics Packaging</h6>
                                            <p>Branding</p>
                                            <a href="#">view project</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 portfolio-webdesign">
                                    <div className="portfolio-item-container">
                                        <img className="img-fluid" src="http://via.placeholder.com/635x400" alt="Portfolio item" />
                                        <div className="portfolio-item-info">
                                            <h6>Cosmetics Packaging</h6>
                                            <p>Branding</p>
                                            <a href="#">view project</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 portfolio-development">
                                    <div className="portfolio-item-container">
                                        <img className="img-fluid" src="http://via.placeholder.com/635x400" alt="Portfolio item" />
                                        <div className="portfolio-item-info">
                                            <h6>Cosmetics Packaging</h6>
                                            <p>Branding</p>
                                            <a href="#">view project</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 portfolio-typo">
                                    <div className="portfolio-item-container">
                                        <img className="img-fluid" src="http://via.placeholder.com/635x400" alt="Portfolio item" />
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
                    <ul className="blog-pagination text-center">
                        <li><a className="pagination-prev" href="#"><i className="fa fa-angle-left" />PREV</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">6</a></li>
                        <li><a className="pagination-next" href="#">NEXT<i className="fa fa-angle-right" /></a></li>
                    </ul>
                </div>
            </main>
        </div>

    )
}


export default Container