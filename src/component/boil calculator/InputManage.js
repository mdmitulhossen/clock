import React from 'react';

const InputManage = (props) => {
    const{tempareture,value,handeler}=props;
    return (
        <div>
            <fieldset>
                <legend>{tempareture}</legend>
                <input type="text" value={value} onChange={handeler}/>
            </fieldset>
        </div>
    );
};

export default InputManage;