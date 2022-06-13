import React, { useState } from 'react';
import Boil from './Boil';
import InputManage from './InputManage';
import {ToCelcius,ToFarenhite} from '../../lib/ToTEmpareture';

const Calculate = () => {
    const [boil,setBoil]=useState("");
    const [far,setFar]=useState("");
    
    const temp = {
          c:"Celcius",
          f:"Farhenhite"

    }
    
    const handeler = (e)=>{
            setBoil(e.target.value);
            setFar(ToFarenhite(e.target.value));
    }
    const farHandeler = (e)=>{
            setFar(e.target.value);
            setBoil(ToCelcius(e.target.value));
    }
    return (
        <div>
            <InputManage tempareture={temp.c} value={boil} handeler={handeler}></InputManage>
            <InputManage tempareture={temp.f} value={far} handeler={farHandeler}></InputManage>
            <br />
            <p><Boil tempareture={boil} farTempareture={far}></Boil></p>
        </div>
    );
};

export default Calculate;