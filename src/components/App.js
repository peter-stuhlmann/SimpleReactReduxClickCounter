import React, { Component } from "react";
import "../assets/scss/main.scss"
import { incrementCounter, decrementCounter, resetCounter } from "../actions/index";
import { connect } from "react-redux";

class App extends Component {

  render() {
    return ( 
      <React.Fragment>
        <h1>Click counter</h1>
        <button className="decrement" onClick={this.props.onDecrement}>-</button>
        <span className="count">{this.props.value}</span>
        <button className="increment" onClick={this.props.onIncrement}>+</button>
        <button className="reset" onClick={this.props.onReset}>Reset</button>
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
  onDecrement: decrementCounter,
  onReset: resetCounter
}

let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;