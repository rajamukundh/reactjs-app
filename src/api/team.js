import _players from './players.json'

const TIMEOUT = 100

export default {
  getPlayers: (cb, timeout) => setTimeout(() => cb(_players), timeout || TIMEOUT)
}