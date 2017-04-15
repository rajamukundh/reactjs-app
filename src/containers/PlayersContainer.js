import React, {PropTypes } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { getVisiblePlayers } from '../reducers/PlayersReducer'
import PlayersList from '../components/PlayersList'
import PlayerItem from '../components/PlayerItem'
import {selectPlayer} from '../actions/select.player'

const PlayersContainer = ({ players, onClick, selectPlayer}) => (
  <PlayersList title="Players">
    {players.map(player =>
       <li onClick={() => selectPlayer(player)} key={player.id}>
          <PlayerItem
              key={player.id}
              player={player}/>
       </li>
    )}
  </PlayersList>
)

PlayersContainer.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  })).isRequired
}

const mapStateToProps = state => ({
    players: getVisiblePlayers(state.players)
})

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectPlayer: selectPlayer},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(PlayersContainer)