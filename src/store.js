import {createStore, combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk'

//create reducer
const reducers =combineReducers({

})
//middleware

const middleware= [thunk]

//create store 
const store = createStore(reducers,applyMiddleware(...middleware)) //spread opeator - used to convert object to array

export default store
