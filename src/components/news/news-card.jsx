import React from 'react';
import './news.styles.css';
export const Card = (props)=>{
    return(
        <div>
            {props.news.map(info=> 

            (
                <div className="row">
                    <div className="col s12 m6">
                    <div className=" card-body text-dark">
                        <p className=" card card-text text-secondary">
                        <li className="list-group list-group flush clo-md-4" >{info.description}</li>
                        </p>
                    </div>
                    </div>
                </div>
            ))}
       </div>
    )
}