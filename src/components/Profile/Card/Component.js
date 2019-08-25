import React from "react"
import { Link } from "react-router-dom";

function Component() {

    return (
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

    )
} 

export default Component

