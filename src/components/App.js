import React, { Component } from "react";
import "../assets/scss/main.scss"
import { incrementCounter, decrementCounter } from "../actions/index";
import { connect } from "react-redux";

class App extends Component {

  render() {
    return ( 
      <React.Fragment>
        <h1>Click counter</h1>
        <button onClick={this.props.onDecrement}>-</button>
        <span className="count">{this.props.value}</span>
        <button onClick={this.props.onIncrement}>+</button>
      </React.Fragment>
    )
  }

}

let mapStateToProps = function(state) {
  return {
      value: state
  }
}

let mapDispatchToProps = {
  onIncrement: incrementCounter,
  onDecrement: decrementCounter
}

let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;