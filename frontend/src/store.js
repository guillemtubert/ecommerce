import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { productListReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';


const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, compose (applyMiddleware(thunk))); //3 parameters


export default store;