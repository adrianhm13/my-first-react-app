/* eslint-disable no-useless-constructor */
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import MyComponent from './components/MyComponent';
import Welcome from './components/Welcome'


class App extends Component {
  constructor(props){
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log('Button has been clicked!');
  }
  render() {
    return (
      <div>
        <MyComponent title="React" onButtonClicked={this.onClickBtn} />
        <Welcome />
      </div>
    );
  }
}

export default App;
