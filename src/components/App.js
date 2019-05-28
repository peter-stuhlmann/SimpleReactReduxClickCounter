import React, { Component } from "react";
import "../assets/scss/main.scss";
import MetaTags from 'react-meta-tags';
import { incrementCounter, decrementCounter, resetCounter } from "../actions/index";
import { connect } from "react-redux";

class App extends Component {

  render() {
    return ( 
      <React.Fragment>

        <MetaTags>
          <title>Click Counter | Peter R. Stuhlmann web development</title>
          <link rel="icon" type="image/png" href={require("../assets/img/favicon.png")} />
          <meta name="description" content="Simple example for a click counter (increment, decrement, reset) built with Redux in React by Peter R. Stuhlmann." />
        </MetaTags>

        <h1>Click counter</h1>
        <div>
          <button className="decrement" onClick={this.props.onDecrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button className="increment" onClick={this.props.onIncrement}>+</button>
          <button className="reset" onClick={this.props.onReset}>Reset</button>
        </div>
        <div className="total">
          <span className="count">{this.props.click} clicks</span>
        </div>
      </React.Fragment>
    )
  }

}

let mapStateToProps = function(state) {
  return {
    count: state.count,
    click: state.click
  }
}

let mapDispatchToProps = {
  onIncrement: incrementCounter,
  onDecrement: decrementCounter,
  onReset: resetCounter
}

let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;