import React, { useState } from 'react';

export default function Textarea(props) {
    const [text, setText] = useState('');


    const handleUPclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }


    const handleLOclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }


    const handleFLclick = () => {
        let newText =text
        .split(" ")
        .map(word => {
            if(word.length > 0) {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            } else {
                return word;
            }
        })
        .join(" ");
        setText(newText);
    }
    const handleCopyclick = () => {
        navigator.clipboard.writeText(text);
    }
    const handleClearclick = () => {
        let newText = '';
        setText(newText);
    }
   

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
        <div className='container my-3'>
            <h1>{props.heading}</h1>
            <div className="form-floating">
                <textarea className="form-control" placeholder="Textarea" id="floatingTextarea2" value={text} onChange={handleOnChange} style={{ height: '200px' }}></textarea>

            </div>
            <button className="btn btn-primary mx-2" onClick={handleUPclick} style={{ marginTop: '8px' }}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLOclick} style={{ marginTop: '8px' }}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleFLclick} style={{ marginTop: '8px' }}>Capital First Letter</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyclick} style={{ marginTop: '8px' }}>Copy Text</button>
            
            <button className="btn btn-primary mx-2" onClick={handleClearclick} style={{ marginTop: '8px' }}>Clear</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text ? text.split(" ").length : 0} words and {text.length} characters</p>
            <p>{0.008*(text ? text.split(" ").length:0)} Minutes Read </p>
            <h2>Preview</h2>
            <p>{text}</p>
           
        </div>
        </>
    );
}

