import React from 'react';

const Button = (props) => {
    
    return (
        <div>
            <button onClick={()=>props.click()}>Click Here</button>
        </div>
    );
};

export default Button;