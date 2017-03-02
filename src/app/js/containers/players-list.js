import React, {Component} from 'React';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectPlayer} from '../actions/select-player.js';
import {Button} from 'react-bootstrap';

class PlayersList extends Component{
  constructor(props) {
    super(props);
  }
  returnPlayers(){
    return this.props.players.map((player) => {
        return(
          <li key={player.id} onClick={() => this.props.selectPlayer(player)}>
              {player.firstName} {player.lastName}
          </li>
        )
    });
  }
  render(){
    return (
      <div>
          <ul>
            {this.returnPlayers()}
          </ul>
          <Button bsStyle="primary" active onClick={() => this.props.addPlayer()}>Add Player</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    players : state.players
  }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectPlayer: selectPlayer}, {addPlayer:addPlayer},dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(PlayersList);
