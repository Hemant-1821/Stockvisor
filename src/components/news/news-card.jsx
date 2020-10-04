import React from 'react';

export const Card = (props)=>{
    return(
        <div className="row">
            <div className="col s12 m6">
            <div className=" card-body text-dark">
                <p className=" card card-text text-secondary">
                    <li className="list-group list-group flush">
                        {props.info.description}
                    </li>
                </p>
            </div>
            </div>
        </div>
    )
}