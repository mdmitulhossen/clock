import React from "react";

export default class Fff extends React.Component{
    state = {
        title:"Javascript",
        text:"Javascript is awesome"
    }
    handleChange=(e)=>{
        if(e.target.type==="text"){
            this.setState({title:e.target.value});
        }
        else if(e.target.type==="textarea"){
            this.setState({text:e.target.value});
        }
          
    }
    render(){
        return(
            <div>
                 <input type="text" placeholder="Enter Title" value={this.state.title} onChange={this.handleChange}></input>
                 <br />
                 <br />
                 <textarea name="text" value={this.state.text} onChange={this.handleChange} cols="30" rows="10"></textarea>
           </div>
        );
    }
}