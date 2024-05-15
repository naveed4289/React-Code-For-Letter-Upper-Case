import React, { useState } from 'react';

export default function Textarea(props) {
    const [text, setText] = useState('Enter Your text here');

    const handleUPclick = () => {
        console.log("Upercase click" +text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="form-floating">
                <textarea className="form-control" placeholder="Textarea" id="floatingTextarea2" value={text} onChange={handleOnChange} style={{ height: '200px' }}></textarea>

            </div>
            <button className="btn btn-primary" onClick={handleUPclick} style={{ marginTop: '8px' }}>Convert To UpperCase</button>
        </div>
    );
}

