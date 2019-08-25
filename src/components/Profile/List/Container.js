import React from "react"
import Card from '../Card'

function Container() {
    let arr = [0,0,0,0,0,0]

    return (
        <div className="drag-this-up text-center drag-up">
            <div className="row no-gutters" id="portfolio-widget-tab-content">
                { arr.map((a) => <Card /> ) }
            </div>
        </div>

    )
}

export default Container