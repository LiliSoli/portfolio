// "use client"

import React from 'react';

function Card(props) {
    
    return (
        <div className="">
            <img
                src={props.thumb}
                alt={props.title}
                className=""
            />
            <h2>
                {props.title}
            </h2>
        </div>
    )
};
export default Card;
