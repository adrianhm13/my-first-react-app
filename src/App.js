/* eslint-disable no-useless-constructor */
import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

import Counter from "./components/Counter";
import Message from "./components/Message";
import MyComponent from "./components/MyComponent";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";


class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log("Button has been clicked!");
  }
  render() {
    return (
      <div>
        <Counter />
        {/* <Message /> */}
        {/* <MyComponent title="React" onButtonClicked={this.onClickBtn} />
        <Welcome />
        <Hello name="Bruce">
          <p>This is children props</p>
        </Hello>
        <Hello name="Clark" />
        <Hello name="Diana" />
        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" /> */}
      </div>
    );
  }
}

export default App;
