import React, {PropTypes} from 'react'
import Player from './Player'

const PlayerItem = ({ player }) => (
    <Player firstName={player.firstName} lastName={player.lastName} />
)

PlayerItem.propTypes = {
    player: PropTypes.shape ({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired
    }).isRequired
}

export default PlayerItem