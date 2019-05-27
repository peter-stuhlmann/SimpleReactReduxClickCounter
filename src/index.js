import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { connect } from "react-redux";
import { incrementCounter } from "./actions/index";
import Counter from "./reducers/index";

let store = createStore(Counter);
console.log(store.getState());

let mapStateToProps = function(state) {
    return {
        value: state
    }
}

let mapDispatchToProps = {
    onIncrement: incrementCounter
}

let App2 = connect(mapStateToProps, mapDispatchToProps)(App);

let render = () => {
    ReactDOM.render(<App2 store={store} />, document.querySelector("#root"));
}

render();