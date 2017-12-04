import React, { Component } from "react";
import { Text, View } from "react-native";
import AddList from "./container/addList"

export default class App extends Component {
    render () {
        return (
            <View>
                <AddList/>
            </View>
        )
    }
}