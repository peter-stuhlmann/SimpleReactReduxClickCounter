import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { incrementCounter } from "./actions/index";
import Counter from "./reducers/index";

let store = createStore(Counter);
console.log(store.getState());

store.dispatch(incrementCounter()); 
console.log(store.getState());

let render = () => {
    ReactDOM.render(
        <App 
            value={store.getState()}
            onIncrement={() => {store.dispatch(incrementCounter());}}
        />, 
        document.querySelector("#root")
    );
}

render();
store.subscribe(render);