import React from 'react';
import PlayersList from '../containers/players-list.js';
import PlayerSelected from '../containers/player-selected.js';

class App extends React.Component {
   constructor(props) {
       super(props);
   }

   render() {
       return(
           <div>
               <h2>Players List</h2>
               <PlayersList />
               <hr/>
               <h2>Selected Player</h2>
               <PlayerSelected/>
           </div>
       );
   }
}

export default App;
