// The Bank - state
// Describe the ideal version of state. 
// {
//     amount: 100
// }
// if we added 1 to the amount, what would state look like
// {
//     amount: 101
// }

// A Transaction Slip - action 
// {
//     type: 'INCREMENT'
// }

// {
//     type: 'DECREMENT'
// }

import {
    createStore
} from 'redux';

// create your action types as constants, so that you get error messages for typos
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Write action creator functions. They format your action objects. Again,
// to avoid typos. 
function actionIncrement(howMuch=1){
    return {
        type: INCREMENT,
        amount: howMuch
    } 
}
function actionDecrement(howMuch=1){
    return {
        type: DECREMENT,
        amount: howMuch
    }
}
// ^ Give default value to howMuch so that if there isn't anything passed to function 
// when called, it uses 1. 


// The Teller - reducer function 
// reducers are always named for the state they manage. they always recieve 
// the current state and the action they're processin. 

const defaultState= {amount: 100}
function counter(state= defaultState, action){
    // console.table(action);
    const newState= {...state};
    switch(action.type){
        case INCREMENT:
            newState.amount = state.amount + action.amount;
            break;
        case DECREMENT:
            newState.amount = state.amount - action.amount;
            break;
        default:
            break;
    }
    // if (action.type === 'INCREMENT'){
    //     newState.amount = state.amount + action.amount;
    // } else if (action.type ==='DECREMENT'){
    //     newState.amount = state.amount - action.amount;
    // } else {
        // no need to do anything here. we already made a copy of state to return.
    // }
    
    // They must return the new version of state  
    return newState;
}

// You give it  a reducer, it gives you a 'store'.
// The store is an object that manages your state using you reducer. 
const store = createStore(counter);

// Push Notifications - subscribe to changes in the store
// Use subscribe to see changes
store.subscribe(()=>{
    console.log(`The state is now:`);
    console.table(store.getState());
});

// Lets give the store some actions to precess.
// store.dispatch process the actions 
store.dispatch(actionIncrement());
store.dispatch(actionIncrement(5));
store.dispatch(actionDecrement(99));




// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
