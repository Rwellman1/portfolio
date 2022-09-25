import React from "react"
import colourPicker from "./images/colourpicker.png"
import site1 from "./images/website.jpg"
import site2 from "./images/website2.jpg"
import portfolioSite from "./images/portfolio-site.png"
import bookshelf from "./images/book-finder.png"
import gibsonSite from "./images/gibson-site.png"
import ScrimbaProject from "./ScrimbaProjects"
export default function Portfolio(props){

    
    //PORTFOLIO PROJECTS
    
    
    const project2 = {
        
    }
    const project3 = {
        
    } 
    const project4 = {
        
    }
    const project5 = {
        title : "Scrimba projects",
        languages : "Javascript | SASS | HTML",
        info : `List of projects I completed whilst doing the Frontend Developer path on Scrimba `,
        siteImg : site1,
        gitLink : "this is the gitlink.com"
    }
    
    return(

        <div className="project-container card1">
            <div className="project-text-container">
                <h3 className="project-title">{props.title}</h3>
                <h4 className="project-sub">{props.languages}</h4>
                <p className="project-info">
                    {props.info}  
                </p>
                <div className="card-btn-flex">
                    <a className="card-btn" href="#"><h4>View live</h4></a>
                    <a className="card-btn card-btn-source" href="#"><h4>Source code</h4></a>
                </div>
            </div> 
                <img className="project-img" src={props.siteImg} alt="website"/> 
        </div>
        

        
    )
}

