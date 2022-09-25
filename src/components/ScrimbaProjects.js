import React from "react";

export default function ScrimbaProject(props){

    const [projectOpen, setProjectOpen] = React.useState(false)
    
    return(
        <div className="project-container dropdown-container" >
            <div className="dropdown-flex">
                <button className="dropdown-btn" onClick={() => setProjectOpen(!projectOpen)}>
                    {props.projectTitle}
                    <span class={projectOpen ? "material-symbols-outlined icon-up" : "material-symbols-outlined icon-down" }>
                        expand_more
                    </span>
                </button>
            </div>
                <div className={projectOpen ? "project-open" : "project-close"}>
                    <div className="scrimba-text-container">
                        <h4 className="dropdown-languages">{props.languages}</h4>
                        <div className="dropdown-small-flex">
                            <p className="project-info dropdown-info">{props.info}</p>
                        </div>
                        <div className="card-btn-flex">
                            <a className="card-btn project-btn" href={props.liveLink}><h4>View live</h4></a>
                            <a className="card-btn card-btn-source project-btn" href={props.sourceLink}><h4>Source code</h4></a>
                        </div>
                    </div>
                    <img className="dropdown-img" src={props.image} />
                </div>
         </div>
    )
}