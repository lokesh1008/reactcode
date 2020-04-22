import React, { Component } from 'react';
import Header from './Comp/Header';
import Prop from './Comp/Props';
import Propstate from './Comp/PropState'
import './App.css';

class App extends Component{
  state =  {
    human: [
      {name: 'Lucky', age: 25},
      {name: 'Warriors', age: 89},
      {name: 'vision', age: 45}
    ]
  }

  convertButtonHandler =() =>{
    this.setState({
      human: [
        {name: 'Mera Nam', age: 25},
        {name: 'Warriors', age: 89},
        {name: 'vision', age: 77}
      ]
    })
  }

  render(){
    return(
    <div className="App">
      <button onClick={this.convertButtonHandler}>Convert</button>
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <h1>This is the Demo of the course</h1>
      <Prop name = {this.state.human[0].name} age = {this.state.human[0].age}/>
      <Prop name = {this.state.human[1].name} age = {this.state.human[1].age}/>
      <Prop name = {this.state.human[2].name} age = {this.state.human[2].age}/>
      <Propstate/>
    </div>
    )}
}

export default App;
