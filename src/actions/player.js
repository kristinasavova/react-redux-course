import * as PlayerActionTypes from '../actiontypes/player'; 

// Action creator that takes name as an argument and returns an action 
// When this action is dispatched to trigger a change in state, it will be handled by reducer     
export const addPlayer = name => {
    return {
        type: PlayerActionTypes.ADD_PLAYER,
        name
    };
};

// Action creator that takes index as an argument and returns an action 
export const removePlayer = index => {
    return {
        type: PlayerActionTypes.REMOVE_PLAYER,
        index
    };
};

// Action creator that takes index and score as arguments and returns an action 
export const updatePlayerScore = (index, score) => {
    return {
        type: PlayerActionTypes.UPDATE_PLAYER_SCORE,
        score,
        index
    };
};

//These actions need to be dispatched in order to express an intent to change the state   