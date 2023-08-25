import React from 'react';
import { useState } from 'react';

export default function TextForm(props) {
    // const [text, setText] = useState("");    
    const [text, setText] = useState(localStorage.getItem('saveTxt'));    
    if(localStorage.getItem('saveTxt') === null)
        localStorage.setItem('saveTxt', "");
    
    // 🗃️saving to local storage -------------------
    const saveToLocalStorage = (value) => {
        localStorage.setItem('saveTxt', value);
    }

    const handleClearClick = () => {
        let newTxt = '';
        setText(newTxt);
        localStorage.setItem('saveTxt', "");
        props.showAlert("Cleared All", "danger");
    }
    const handleOnChange = (event) => {
        // console.log('handle onChange');
        setText(event.target.value);
    }
    const handleUpClick = () => {
        saveToLocalStorage(text);
        // console.log('Uppcase conversion button is clicked : ' + text);

        // setText("You have Clicked on handleUpClick");

        let newTxt = text.toUpperCase(text);
        setText(newTxt);
        props.showAlert("Conveted to Upper Case", "primary");

    }
    const handleLoClick = () => {
        let newTxt = text.toLowerCase(text);
        setText(newTxt);
        saveToLocalStorage(newTxt);
        props.showAlert("Conveted to Lower Case", "success");
    }
    const handleCapitalizedClick = () => {
        if (text !== "") {
            let arrSplit = text.split(' ');
            let newCapitalizedTxt = '';
            // console.log("arrSplit : ", arrSplit);        
            for (let index in arrSplit) {
                // console.log(arrSplit[index])
                let newTxt = arrSplit[index].charAt(0).toUpperCase() + arrSplit[index].slice(1).toLowerCase();
                newCapitalizedTxt += newTxt + " ";
            }
            setText(newCapitalizedTxt);
            saveToLocalStorage(newCapitalizedTxt);
            props.showAlert("Text is Capitalized", "success");
        }
    }
    const handleInverseClick = () => {
        if (text !== "") {
            let str = text;
            // console.log(typeof (str));
            
            let invert_Str = "";
            for (let i = 0; i < str.length; i++) {
                let ch = str[i];
                console.log(ch);
                // console.log(ch.toUpperCase());
                
                // if (ch === ch.toUpperCase()) {
                    //     console.log(ch, " is upper case");
                    // }
                    // else if(ch === ch.toLowerCase()) {
                //     console.log(ch, " is lower case");                
                // }

                if (str.charAt(i) === str.charAt(i).toUpperCase()) {
                    invert_Str += str.charAt(i).toLowerCase();
                }
                else if (str.charAt(i) === str.charAt(i).toLowerCase()) {
                    invert_Str += str.charAt(i).toUpperCase();
                }
                setText(invert_Str);
                saveToLocalStorage(invert_Str);
                props.showAlert("Text is Inverted", "primary");
            }
        }
    }
    const handleAlternatingClick = () => {
        let alterTxt = "";
        
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                alterTxt += text.charAt(i).toLowerCase();
            }
            else {
                alterTxt += text.charAt(i).toUpperCase();
            }
        }
        console.log(text);
        setText(alterTxt);
        console.log(text);  // ❓ why the value of text is not updating instantly 
        saveToLocalStorage(alterTxt);
        props.showAlert("Text is aLtErNaTeD", "primary");
    }
    const handleTitleClick = () => {
        let newTxt = "___________________";
        setText(newTxt);
        saveToLocalStorage(newTxt);
        props.showAlert("Text is aLtErNaTeD", "secondary");
    }
    
    // 🔄️ word count and character count --------------------------------
    let wordCount;
    wordCount = text.split(' ').length;
    // console.log(text.split(' '));
    // console.log(wordCount);

    let characterCount = text.length;
    return (
        <>
            <div className={`main-container p-4 text-${props.drk_mode === 'light' ? 'dark' : 'light'} bg-${props.drk_mode}`} style={{
                height: "80vh"
            }}>
                <div className='container my-1 p-4'>
                    <div className='mb-2'>
                        <label htmlFor="exampleFormControlTextarea1"><h3>{props.heading}</h3></label>
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="5" placeholder='Enter your text ...' ></textarea>
                    </div>

                    {/* 🆗 Buttons -------------------- */}
                    <div className='d-flex flex-wrap justify-content-between align-content-around'  >
                        <button className="btn btn-danger" onClick={handleClearClick} data-toggle="tooltip" title="Clear Input Field" >Clear All</button>
                        <button className="btn btn-primary" onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
                        <button className="btn btn-success" onClick={handleLoClick}>convert to lowercase</button>

                        <button className="btn btn-info" onClick={handleInverseClick}>iNVERSE cASE</button>
                        <button className="btn btn-success" onClick={handleCapitalizedClick}>Capitalized Case</button>
                        <button className="btn btn-primary" onClick={handleAlternatingClick} >aLtErNaTiNg cAsE</button>
                        <button className="btn btn-success" disabled onClick={handleTitleClick} data-toggle="tooltip" title="Capitalization of the first word, and all other words, except for articles, prepositions, and conjunctions.This is an Example of Title Case in Use." >Title Case</button>
                    </div>
                </div>
                <div className="container my-2">
                    <h3>Text Summay</h3>
                    <p>{wordCount - 1} words & {characterCount} characters</p>
                    <p>Time to read the Whole Content : {0.2 * wordCount} seconds</p>
                    <h3>Preview</h3>
                    {text}
                </div>
            </div>
        </>
    )
}

