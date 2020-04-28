// Take all exports from the player.js file in the actiontypes folder 
// Set them as properties on an object called PlayerActionTypes    

import * as PlayerActionTypes from '../actiontypes/player'; 

// Reducer: A Redux construct that is responsible for maintaining a specific portion 
// of the Redux store, which holds the app's state. In JavaScript, a reducer is 
// implemented as a pure function that takes two arguments, the current state and 
// the action being taken, and produces the next state. In order for Redux to work 
// properly, Reducers must not mutate the current state. In other words, 
// the state for a reducer must be treated as immutable.

const initialState = {
    players: [
        {
            name: 'Senya',
            score: 15,
            created: '28/4/2020',
            updated: '28/4/2020' 
        },
        {
            name: 'Praline',
            score: 20,
            created: '28/4/2020',
            updated: '28/4/2020'
        },
        {
            name: 'Sabrina',
            score: 2,
            created: '28/4/2020',
            updated: '28/4/2020'

        }
    ],
    selectedPlayerIndex: -1
};

// A reducer must be a pure function that doesn't mutate state! 
// Reducer interprets the actions that occur within app and produce a new state for specific data     
export default function Player (state = initialState, action) {

    let now = new Date ();
    now = `${now.toLocaleDateString('en-AU')} ${now.toLocaleTimeString('en-AU')}`;

    switch (action.type) {
        
        case PlayerActionTypes.ADD_PLAYER: {
            const addPlayerList = [ ...state.players, {
                name: action.name,
                score: 0, 
                created: now 
            }];
            return {
                ...state,
                players: addPlayerList
            };
        }
        
        case PlayerActionTypes.REMOVE_PLAYER: {
            const removePlayerList = [
                ...state.players.slice (0, action.index), // subset of array from 0 up to a specific index
                ...state.players.slice (action.index + 1) // plus subset of array at index + 1 to the end     
            ]; 
            return {
                ...state,
                players: removePlayerList,
                selectedPlayerIndex: -1
            };
        }
        
        case PlayerActionTypes.UPDATE_PLAYER_SCORE: { 
            const updatePlayerList = state.players.map ( (player, index) => {
                if (index === action.index) {
                    return {
                        ...player,
                        score: player.score + action.score,
                        updated: now
                    };  
                }
                return player;
            });   
            return {
                ...state,
                players: updatePlayerList
            }; 
        }
        
        case PlayerActionTypes.SELECT_PLAYER:
            return {
                ...state,
                selectedPlayerIndex: action.index 
            }; 

        // a default case - if a reducer receives an action type it doesn't handle  
        default: 
            return state;
    }  
} 