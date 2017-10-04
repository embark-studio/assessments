import React, { Component } from 'react';
import element from './App.css';
import WelcomeHeader from './Welcome.js';

class App extends Component {
  constructor() {
    super()
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setValue(e.target.value)
  }
  setValue(value) {
    this.setState({value})
  }
  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange} />
        <WelcomeHeader name="Ian"/>
      </div>
    );
  }
}

export default App;
