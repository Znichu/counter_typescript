import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {CounterReducer} from "./counter_reducer";


const rootReducer = combineReducers({
    counter: CounterReducer
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

export type RootState = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));