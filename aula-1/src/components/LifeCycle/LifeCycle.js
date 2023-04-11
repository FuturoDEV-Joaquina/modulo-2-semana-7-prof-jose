import React from "react";

class LifeCycle extends React.Component{
  constructor(props){
    console.log('Construindo');

    super(props);
    this.state = {
      data: {}
    }
  }

  componentWillMount(){
    console.log('Montando 1');
  }

  async componentDidMount(){
    console.log('Montando 2');

    const response = await fetch('https://api.github.com/users/simaoj');
    const data = await response.json();
    this.setState({data: data});
    console.log(data);
  }

  componentWillUnmount(){
    console.log('Desmontei');
  }

  render(){
    return <>{this.state.data.name}</>;
  }
}

export default LifeCycle; 