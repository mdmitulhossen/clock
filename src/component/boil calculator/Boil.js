import React from 'react';

const Boil = (props) => {
    if(parseFloat(props.tempareture)>=100 || parseFloat(props.farTempareture)>=212){
        return (
            <div>
                <h1>Water is Boiled</h1>
            </div>
        );
    }
    else{
        return (
            <div>
               <h1>Water is not boil!!</h1>
            </div>
        );
    }
    
};

export default Boil;