import React from "react"
import {Link} from "react-router-dom"
import { List } from "../../components";


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
                        <List />
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