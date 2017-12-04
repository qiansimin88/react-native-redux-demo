import React, { Component } from "react"
import { View, Text } from "react-native"
import { connect } from "react-redux"

class AddList extends Component {
    constructor ( props ) {
        super( props );
        console.log( props );
    }

    render () {
        return ( 
            <View>
                <Text>99111199</Text>
            </View>
         )
    }
}
export default connect()(AddList);
