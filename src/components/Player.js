import React, { PropTypes } from 'react'

const Player = ({ firstName, lastName }) => (
    <ui>{firstName} {lastName}</ui>
)

Player.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
}

export default Player