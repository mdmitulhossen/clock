import React, { useState } from 'react';
import Button from '../button/Button';

const Clock = () => {
    const [clicker,setClicker] = useState("en-US");
    const handleClicker = ()=>{
             setClicker("bn-BD");
    }
     const [timer,setTimer] = useState(new Date());
     //run time
     setInterval(() => {
        setTimer(new Date())
     }, 1000);

    return (
        <div>
            <h1>{timer.toLocaleTimeString(clicker)}</h1>
            <Button click={handleClicker}></Button>
        </div>
    );
};

export default Clock;