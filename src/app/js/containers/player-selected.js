import React, {Component} from 'react';
import {connect} from 'react-redux';

class PlayerSelected extends Component {
    constructor(props){
        super(props)
    }

    render() {
        if (!this.props.player) {
            return (<div>Select a Player...</div>);
        }
        return(
            <div>
                <h2>{this.props.player.firstName} {this.props.player.lastName}</h2>
            </div>
        )
    }
}

const mapPropsToState = (state) => {
    return{
        player : state.selectPlayer
    };
}


export default connect(mapPropsToState)(PlayerSelected)
