import React from 'react';

import "./Card.css";

// function Card(props) {
const Card = (props) => {

    // ⏬ Using props.chilren the className will not imported, to do that we have to also call the props.className to import all the className where Card component is used in other .js file Eg. expenseItem.js
    // return <div className="card" >{props.children}</div>

    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>



}

export default Card;
