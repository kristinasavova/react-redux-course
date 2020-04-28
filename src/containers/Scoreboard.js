import React, { Component, PropTypes } from 'react';
// Takes any state data it passes and converts it to props data 
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';  
import * as PlayerActionCreators from '../actions/player'; 
import AddPlayerForm from '../components/AddPlayerForm'; 
import Player from '../components/Player'; 
import Header from '../components/Header'; 

class Scoreboard extends Component {
  
    static propTypes = {
        players: PropTypes.array.isRequired 
    };

    render () {

        // Extract dispatch and players from props using the destructuring assignment
        const { dispatch, players } = this.props; 
        // Provide bound action creators to the components that will need to take actions  
        // Bound action creator generates an action and is immediately dispatched to the store
        const addPlayer = bindActionCreators (PlayerActionCreators.addPlayer, dispatch);
        const removePlayer = bindActionCreators (PlayerActionCreators.removePlayer, dispatch);
        const updatePlayerScore = bindActionCreators (PlayerActionCreators.updatePlayerScore, dispatch);
        
        // Create Player component for each player
        const PlayerComponents = players.map ( (player, index) => 
            <Player 
                index = { index }
                name = { player.name }
                score = { player.score }
                key = { player.name }
                updatePlayerScore = { updatePlayerScore }
                removePlayer = { removePlayer }
            />
        ); 

        return (
            <div className = "scoreboard">
                <Header players = { players } />
                <div className = "players">
                    { PlayerComponents }
                </div>
                <AddPlayerForm addPlayer = { addPlayer } />
            </div>
        );
    }
}

// Takes the player state data and assigns it to a prop value called players    
// Returns an object that gets merged into the scoreboard components props   
const mapStateToProps = state => {
    {
        players: state 
    }
};

// The first set of parentheses contains the func to transform state to props  
// The second set of parentheses contains the container we want to connect to Redux 
// Subscribe Scoreboard to any changes in state - any Redux store updates   
export default connect (mapStateToProps) (Scoreboard);  
