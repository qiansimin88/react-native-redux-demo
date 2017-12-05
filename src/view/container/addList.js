import React, { Component } from "react"
import { View, TextInput, Button } from "react-native"
import { connect } from "react-redux"
import { addToDo }  from "../../redux/action/todo"

class AddList extends Component {
    constructor ( props ) {
        super( props );
        this.state = { text: '' };
        this._onButtonPress = this._onButtonPress.bind( this );
    }
    _onButtonPress () {
        const { dispatch } = this.props;
        // console.log( addToDo )
        dispatch( addToDo( this.state.text ) );
    }
    _onFocus () {
        console.log( "聚焦" );
    }
    render () {
        return ( 
            <View>
                <TextInput 
                    placeholder = { "请添加你想出入的文字" }
                    maxLength = { 12 }
                    onChangeText = { (text) => this.setState( { text } ) }
                    onFocus = { ( s ) => this._onFocus.apply( this, s ) }
                />
                <Button
                    title = "确定"
                    onPress = { this._onButtonPress }
                />
            </View>
         )
    }
}

const mapStateToProps = ( sate ) => {
    return {
    }
}

export default connect( mapStateToProps )(AddList);
