import React from 'react';

interface Props {
    title: string,
    text: string,
    num: number,
    img: string
}

function Card(props: Props) {
    return (
        <div className="container">
            <div>{props.num}</div>
            <img src={props.img}></img>
            <div className="m-content">
                <div className="m-title">
                    {props.title}
                </div>
                <div className="m-text">
                    {props.text}
                </div>
            </div>
        </div>
    );
}

export default Card;