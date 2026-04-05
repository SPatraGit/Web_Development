import React, { useState } from 'react';

export default function TextForm(props) {
    const changeTextUc = () => {
        let newText = text.toLocaleUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!", "success");
    }
    const changeTextLc = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!", "success");
    }

    const clearText = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }

    const copyText = () => {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to Clipboard!", "success");
    }
    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed!", "success");
    }

     const handelText = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color : props.mode === "light"?"black":"white"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handelText} style={{backgroundColor : props.mode === "light"?"white":"#0D2329",color : props.mode === "light"?"black":"white"}} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={changeTextUc}>Change_UpperCase</button>
            <button className="btn btn-success mx-1 my-1" onClick={changeTextLc}>Change_LowerCase</button>
            <button className="btn btn-warning mx-1 my-1" onClick={copyText}>Copy</button>
            <button className="btn btn-secondary mx-1 my-1" onClick={removeExtraSpace}>Remove Extra Space</button>
            <button className="btn btn-danger mx-1 my-1" onClick={clearText}>Clear</button>
        </div>
        <div className="container my-3 " style={{color : props.mode === "light"?"black":"white"}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes for read</p>
            <h2>Preview</h2>
            <p>{text.length>0? text : "Please Write Somthing"}</p>
        </div>
        </>
    )
}
