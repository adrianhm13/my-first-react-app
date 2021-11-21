import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {

    // Fourth approach, short-circuit operator
    // Depends if you want to render or not something 

    return this.state.isLoggedIn && <div>Welcome Adrian</div>

    // Third approach, ternary operator

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Adrian</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // Second approach, variables

    // let message;
    // if(this.state.isLoggedIn) {
    //     message = <div>Welcome Adrian</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>;

    // First approach, if else

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Adrian</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // return (
    //   <div>
    //     <div>Welcome Adrian</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
