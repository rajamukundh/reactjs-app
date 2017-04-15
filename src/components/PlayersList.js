import React, { PropTypes } from 'react'

const PlayersList = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
)

PlayersList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default PlayersList