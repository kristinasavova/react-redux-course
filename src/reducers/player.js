// Take all exports from the player.js file in the actiontypes folder 
// Set them as properties on an object called PlayerActionTypes    

import * as PlayerActionTypes from '../actiontypes/player'; 

// Reducer: A Redux construct that is responsible for maintaining a specific portion 
// of the Redux store, which holds the app's state. In JavaScript, a reducer is 
// implemented as a pure function that takes two arguments, the current state and 
// the action being taken, and produces the next state. In order for Redux to work 
// properly, Reducers must not mutate the current state. In other words, 
// the state for a reducer must be treated as immutable.

const initialState = [
    {
        name: 'Jim Hoskins',
        score: 31
    },
    {
        name: 'Andrew Chalkley',
        score: 20
    },
    {
        name: 'Alena Holligan',
        score: 50
    }
];

// A reducer must be a pure function that doesn't mutate state! 
// Reducer interprets the actions that occur within app and produce a new state for specific data     
export default function Player (state = initialState, action) {
    switch (action.type) {
        case PlayerActionTypes.ADD_PLAYER:
            return [
                ...state,
                {
                    name: action.name, 
                    score: 0
                }    
            ];
        case PlayerActionTypes.REMOVE_PLAYER:
            return [
                ...state.slice (0, action.index), // subset of array from 0 up to a specific index
                ...state.slice (action.index + 1) // plus subset of array at index + 1 to the end     
            ];
        case PlayerActionTypes.UPDATE_PLAYER_SCORE: 
            return state.map ( (player, index) => {
                if (index === action.index) {
                    return {
                        ...player,
                        score: player.score + action.score
                    };  
                }
                return player;
            });
        // a default case - if a reducer receives an action type it doesn't handle  
        default: 
            return state;
    }  
} 