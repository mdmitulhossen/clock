import React, { useState } from 'react';

const Form = () => {
    const title={
        inputTitle:"Javascript",
        textAreatitle:"Javascrip is Awesome"
    };
    const [state,setState]=useState(title.inputTitle);
    const [textarea,settextarea]=useState(title.textAreatitle);
    
    const handleClick = (e)=>{
        if(e.target.type==="text"){
            setState( e.target.value);
        }
        else if(e.target.type==="textarea"){
            settextarea(e.target.value);
        }
        else{
            console.log("nothing here!!")
        }
            
    }
    return (
        <div>
            <input 
                type="text" 
                placeholder='Enter title' 
                value={state} 
                onChange={handleClick}
            />
            <br />
            <br />
            <textarea 
                name="Text" 
                value={textarea} 
                onChange={handleClick}
                cols="30" 
                rows="10"
            >   
            </textarea>
        </div>
    );
};

export default Form;