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

// THESE ARE WHAT YOU WANT TO PUT IN YOUR ACTION FUNCTIONS EVENTUALLY
// {
//     amounts: [0];
// }

// {
//     amounts: [1];
// }

// {
//     type: INCREMENT,
//     id: 0
// }

// create your action types as constants, so that you get error messages for typos
// CREATE
const INCREMENT = 'INCREMENT';
// UPDATE
const DECREMENT = 'DECREMENT';
// UPDATE
const ADD_COUNTER = 'ADD_COUNTER';
// DELETE
const DEL_COUNTER = 'DEL_COUNTER';


// Write action creator functions. They format your action objects. Again,
// to avoid typos. THESE ARE ACTIONS BELOW
function actionIncrement(id){
    return {
        type: INCREMENT,
        id
    } 
}
function actionDecrement(id){
    return {
        type: DECREMENT,
        id
    }
}
// ^ Give default value to howMuch so that if there isn't anything passed to function 
// when called, it uses 1. 

function addCounter(){
    return {
        type: ADD_COUNTER
    }
}

function delCounter(id){
    return {
        type: DEL_COUNTER,
        id
    }
}

// The Teller - reducer function 
// reducers are always named for the state they manage. they always recieve 
// the current state and the action they're processin. 

const defaultState= {amount: [0, 2, 4, 5, 6]};
function counter(state= defaultState, action){
    // console.table(action);
    const newState= {...state};
    switch(action.type){
        case INCREMENT:
            newState.amount[action.id] = state.amount[action.id] + action.amount;
            break;
        case DECREMENT:
            newState.amount[action.id] = state.amount[action.id] - action.amount;
            break;
        case ADD_COUNTER:
            newState.amount.push(0);
            break;
        case DEL_COUNTER:
            newState.amount.splice(action.id, 1)  
            break;
        default:
            break;
    }
    // if (action.type === 'INCREMENT'){
    //     newState.amount[action.id] = state.amount[action.id] + action.amount;
    // } else if (action.type ==='DECREMENT'){
    //     newState.amount[action.id] = state.amount[action.id] - action.amount;
    // } else {
        // no need to do anything here. we already made a copy of state to return.
    // }
    // They must return the new version of state  
    return newState;
}

// You give it  a reducer, it gives you a 'store'.
// The store is an object that manages your state using you reducer. 
const store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Push Notifications - subscribe to changes in the store
// Use subscribe to see changes
store.subscribe(()=>{
    console.log(`The state is now:`);
    console.table(store.getState());
});

// Lets give the store some actions to process.
// store.dispatch process the actions 
store.dispatch(actionIncrement(0));
store.dispatch(actionIncrement(1));
store.dispatch(actionDecrement(3));
store.dispatch(addCounter());
store.dispatch(addCounter());
store.dispatch(addCounter());
store.dispatch(addCounter());
store.dispatch(delCounter());


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
