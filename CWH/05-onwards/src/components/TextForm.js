import React from 'react';
import { useState } from 'react';

export default function TextForm(props) {

    const handleOnChange = (event) => {
        console.log('handle onChange');
        setText(event.target.value);
    }    
    const handleUpClick = () => {
        console.log('Uppcase conversion button is clicked : ' + text);

        // setText("You have Clicked on handleUpClick");

        let newTxt = text.toUpperCase(text);
        setText(newTxt);
    }
    const [text, setText] = useState("Enter Your Text Here");

    return (
        <>
            <div className='container my-1 '>
                <div className='mb-2'>
                    <label htmlFor="exampleFormControlTextarea1"><h3>{props.heading}</h3></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            </div>
        </>
    )
}

