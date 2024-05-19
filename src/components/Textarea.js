import React, { useState } from 'react';

export default function Textarea(props) {
    const [text, setText] = useState('');


    const handleUPclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
       
            props.showAlert("Convert To UpperCase","success");

    
    }


    const handleLOclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert To LowerCase","success");
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
        props.showAlert("Convert To First Letter Capital","success");
    }
    const handleCopyclick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copy To ClipBoard","success");
    }
    const handleRemoveSpace = () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove Extra Spaces","success");
    }
    const handleClearclick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Clear All text","success");
    }
   

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
        <div className='container my-3' style={{ color:props.mode === 'dark' ? 'white' : 'black' }}>
            <h1>{props.heading}</h1>
            <div className="form-floating">
                <textarea className="form-control" placeholder="Textarea" id="floatingTextarea2" value={text} onChange={handleOnChange} style={{ height: '200px',backgroundColor:props.mode === 'dark' ? 'black' : 'white',color:props.mode === 'dark' ? 'white' : 'black' }}></textarea>

            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUPclick} style={{ marginTop: '8px' }}>Convert To UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLOclick} style={{ marginTop: '8px' }}>Convert To LowerCase</button>
            <button  disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleFLclick} style={{ marginTop: '8px' }}>Capital First Letter</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyclick} style={{ marginTop: '8px' }}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleRemoveSpace} style={{ marginTop: '8px' }}>Remove Spaces</button>
            
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearclick} style={{ marginTop: '8px' }}>Clear</button>
        </div>
        <div className="container my-3" style={{ color:props.mode === 'dark' ? 'white' : 'black' }}>
            <h2>Your Text Summary</h2>
            <p>{ text.split(/\s+/).filter((element)=>{return element.length!==0}).length } words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes Read </p>
            <h2>Preview</h2>
            <p>{text}</p>
           
        </div>
        </>
    );
}

