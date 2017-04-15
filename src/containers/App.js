import React from 'react';
import PlayersContainer from '../containers/PlayersContainer';
import PlayerSelectedContainer from '../containers/PlayerSelectedContainer'

const App = () => (
    <div>
        <h2>Cricket App</h2>
        <hr/>
        <PlayersContainer />
        <PlayerSelectedContainer/>
    </div>
)

export default App