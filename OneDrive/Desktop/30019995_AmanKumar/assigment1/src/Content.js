import React, { Component } from "react";
import scpdata from "./data.json";

const data = scpdata.map(

    (scpdata) => {
        return(
        <div className="col-12" key={scpdata.item}>
            <div className="card text-dark">
                <br></br>
                    <div className="card-body bg-dark text-danger text-center">
                        <h1 className="card-title text-secondary" >{scpdata.item}</h1>
                        <h2 className="card-title">{scpdata["Object Class"]}</h2>
                        <img src={scpdata.image.toString()} className="img-fluid rounded" alt=" "></img>
                        <h2 className="card-title">{scpdata["Special Containment Procedures"]}</h2>
                        <h2 className="card-title">{scpdata.description}</h2>
                        <h2 className="card-title">{scpdata.Reference}</h2>

                    </div>
                </div> 
                <br></br>
        </div>
        );
    }
);


class Content extends Component
{
    render()
    {
        return(
            <div>
                {data}
            </div>
        );
    }
}

export default Content;