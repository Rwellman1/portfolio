import React from "react"
import site1 from "./images/website.jpg"
export default function Portfolio(props){

    
    return(

        <div className="project-container card1">
            <div className="project-text-container">
                <h3 className="project-title">{props.title}</h3>
                <h4 className="project-sub">{props.languages}</h4>
                <p className="project-info">
                    {props.info}  
                </p>
                <div className="card-btn-flex">
                    <a className="card-btn" href={props.liveLink}><h4>View live</h4></a>
                    <a className="card-btn card-btn-source" href={props.sourceLink}><h4>Source code</h4></a>
                </div>
            </div> 
                <img className="project-img" src={props.siteImg} alt="website"/> 
        </div>
        

        
    )
}

