import React from "react"
import {Link} from "react-router-dom"
import { List } from "../../components";


function Container() {
    return (
        <div>
            <header className="page">
                <div className="container text-center">
                    <h2>Our Portfolio</h2>
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
                                <li> <a> ALL</a></li>
                                <li><a> WEB </a></li>
                                <li><a> MOBILE</a> </li>
                                <li><a>INFUSTRUCTURE</a></li>
                                <li><a>DEVELOPMENT</a></li>
                            </ul>
                        </div>
                        <List />
                    </div> 
                    
                    <ul className="blog-pagination text-center">
                        <li><a className="pagination-prev" href="#"><i className="fa fa-angle-left" />PREV</a></li>
                      
                        { [1,2,3,4,5].map(e => <li><a>{e}</a></li>) }
                      
                        <li><a className="pagination-next" href="#">NEXT<i className="fa fa-angle-right" /></a></li>
                    </ul>
                </div>
            </main>
        </div>

    )
}


export default Container