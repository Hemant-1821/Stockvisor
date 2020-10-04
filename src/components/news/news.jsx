import React from 'react';
import './news.styles.css';
import {Card} from './news-card';

export const News = (props)=>{
    return(
        <div className="news">
            <div>{props.news.map(info => (<Card info={info} />))}
            </div>
        </div>
    )
}