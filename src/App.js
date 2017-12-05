import { Provider } from "react-redux";
import React, { Component } from "react";
import store from "./redux/store"  //通过createStore返回一个store
import Main from "./view/index"   

//监听store的变化
store.subscribe( _ => {
    console.log( store.getState() );
} );

export default function App() {
    return (
        <Provider store = { store }>
            <Main/>
        </Provider>
    )
}