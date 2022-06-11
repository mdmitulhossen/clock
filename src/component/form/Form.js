import React, { useState } from 'react';

const Form = () => {
    const title={
        inputTitle:"Javascript",
        textAreatitle:"Javascrip is Awesome"
    };
    const [state,setState]=useState(title.inputTitle);
    const [textarea,settextarea]=useState(title.textAreatitle);
    const [select,setSelect]=useState("");
    
    const handleClick = (e)=>{
        if(e.target.type==="text"){
            setState( e.target.value);
        }
        else if(e.target.type==="textarea"){
            settextarea(e.target.value);
        }
        else if(e.target.type==="select-one"){
            setSelect(e.target.value);
        }
        else{
            console.log(e.target.type)
            console.log("nothing here!!")
        }
            
    }
    const submitHandler = (e)=>{
         e.preventDefault();
         console.log(state, textarea,select)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
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
            <br />
            <br />
            <select onChange={handleClick}>
                    <option value="React">React</option>
                    <option value="Javascript">Javascript</option>
                    <option value="Javascript">Java</option>
                    
            </select>
            <br />
            <br />
            <input type="submit" value="submit"></input>

            </form>
          
        </div>
    );
};

export default Form;