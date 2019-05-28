import React, { Component } from "react";
import "../assets/scss/main.scss"
import { incrementCounter, decrementCounter } from "../actions/index";
import { connect } from "react-redux";

class App extends Component {

  render() {
    return ( 
      <React.Fragment>
        Click counter: {this.props.value}
        <button onClick={this.props.onIncrement}>+</button>
        <button onClick={this.props.onDecrement}>-</button>
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