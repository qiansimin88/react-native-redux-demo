import React, { Component } from "react"
import { View, Text } from "react-native"
import { connect } from "react-redux"

class AddList extends Component {
    constructor ( props ) {
        super( props );
    }

    render () {

        const { dispatch, a } = this.props;
        console.log( 11111 );
        console.log( a );
        console.log( dispatch );
        return ( 
            <View>
                <Text>99111199</Text>
            </View>
         )
    }
}

const mapStateToProps = ( sate ) => {
    return {
        ...{ a:1, b:2 }
    }
}

export default connect( mapStateToProps )(AddList);
