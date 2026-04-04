import React, { useState } from 'react'

export default function TextForm(props) {
    const changeTextUc = () => {
        let newText = text.toLocaleUpperCase();
        setText(newText)
    }
    const changeTextLc = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }

    const clearText = () => {
        let newText = '';
        setText(newText)
    }

     const handelText = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handelText}  id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={changeTextUc}>Change_UpperCase</button>
            <button className="btn btn-success mx-1" onClick={changeTextLc}>Change_LowerCase</button>
            <button className="btn btn-danger mx-5" onClick={clearText}>Clear</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes for read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
