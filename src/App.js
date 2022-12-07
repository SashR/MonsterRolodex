import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [
        {name: 'Linda'},
        {name: 'Jessica'},
        {name: 'Ariana'},
      ]
    }
  }

  render(){
    return (
      <div className="App">
        {this.state.monsters.map(m => <h1> {m.name} </h1>)}
      </div>
    );
  }
}

export default App;
