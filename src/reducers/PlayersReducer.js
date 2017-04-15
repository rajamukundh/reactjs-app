import { RECEIVE_PLAYERS } from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PLAYERS:
      return {
        ...state,
        ...action.players.reduce((obj, player) => {
          obj[player.id] = player
          return obj
        }, {})
      }
    default:
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PLAYERS:
      return action.players.map(player => player.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getPlayer = (state, id) =>
  state.byId[id]

export const getVisiblePlayers = state =>
  state.visibleIds.map(id => getPlayer(state, id))