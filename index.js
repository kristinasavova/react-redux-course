import React from 'react';
import { render } from 'react-dom'; 
// Takes the store and provide it to all connected container components  
import { Provider } from 'react-redux'; 
import { createStore } from 'redux';
import PlayerReducer from './src/reducers/player'; 
import Scoreboard from './src/containers/Scoreboard'; 

// Store is the most critical component of Redux 
// Store holds the entire application state, it's a composition of all reducers  
// It's a primary source of info for the Scoreboard container
const store = createStore (
    PlayerReducer,
    // Let use Redux DevTools  
    window.devToolsExtension && window.devToolsExtension ()
);   

render (
    <Provider store={store}>
        <Scoreboard />
    </Provider>,
    document.getElementById ('root')
);