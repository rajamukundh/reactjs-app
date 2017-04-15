import {combineReducers} from 'redux'
import PlayersReducer from './PlayersReducer'
import PlayerSelectedReducer from './PlayerSelectedReducer'

const allReducers = combineReducers({
    players: PlayersReducer,
    selectedPlayer: PlayerSelectedReducer
})

export default allReducers