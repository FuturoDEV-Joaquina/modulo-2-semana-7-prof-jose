import React from "react";

class ClassComponent extends React.Component{

  constructor(props){
    super(props);
    
    this.state = {
      name: props.name
    }
  }

  render(){
    return <p>{this.state.name}</p>;
  }
}

export default ClassComponent;