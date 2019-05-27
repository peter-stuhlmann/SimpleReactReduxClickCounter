import React, { Component } from "react";
import "../assets/scss/main.scss"

export default class App extends Component {

  render() {
    return ( 
      <React.Fragment>
        Click counter: {this.props.value}
        <button onClick={this.props.onIncrement}>Click</button>
      </React.Fragment>
    )
  }

}
