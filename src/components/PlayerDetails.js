import React, { PropTypes } from 'react'

const PlayerDetails = ({ player }) => (
    <div>
        <p>Age: {player.age}</p>
        <p>Description: {player.description}</p>
    </div>
)

PlayerDetails.propTypes = {
    player: PropTypes.shape ({
        age: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired
}

export default PlayerDetails