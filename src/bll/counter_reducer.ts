import {ThunkAction} from "redux-thunk";
import {counterAPI} from "../dal/counter";
import {RootState} from "./store";

const SET_DATA_COUNTER = "APP/COUNTER/SET_DATA_COUNTER";
const INCREMENT_COUNTER = "APP/COUNTER/INCREMENT_COUNTER";
const DECREMENT_COUNTER = "APP/COUNTER/DECREMENT_COUNTER";
const RESET_COUNTER = "APP/COUNTER/RESET_COUNTER";


let initialState = {
    value: 0
}

type InitialStateType = typeof initialState


export const CounterReducer = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        case SET_DATA_COUNTER:
        case INCREMENT_COUNTER:
        case DECREMENT_COUNTER:
        case RESET_COUNTER: {
            return {
                ...state,
                value: action.value
            }
        }
        default:
            return state
    }
}

type SetDataCounter = {
    type: typeof SET_DATA_COUNTER
    value: number
}
const setDataCounter = (value: number): SetDataCounter => ({type: SET_DATA_COUNTER, value});
type IncrementCounter = {
    type: typeof INCREMENT_COUNTER
    value: number
}
const incrementCounter = (value: number): IncrementCounter => ({type: INCREMENT_COUNTER, value});
type DecrementCounter = {
    type: typeof DECREMENT_COUNTER
    value: number
}
const decrementCounter = (value: number): DecrementCounter => ({type: DECREMENT_COUNTER, value});
type ResetCounter = {
    type: typeof RESET_COUNTER
    value: number
}
const resetCounter = (value: number): ResetCounter => ({type: RESET_COUNTER, value});

export const getCounterValue = (): ThunkType => {
    return async (dispatch) => {
        let data = await counterAPI.getValue();
        dispatch(setDataCounter(data.value))
    }
};

export const setIncrementCounter = (value: number): ThunkType => {
    return async (dispatch) => {
        let data = await counterAPI.increment(value);
        dispatch(incrementCounter(data.value))
    }
};
export const setDecrementCounter = (value: number): ThunkType => {
    return async (dispatch) => {
        let data = await counterAPI.decrement(value);
        dispatch(decrementCounter(data.value))
    }
}

export const setResetCounter = (value: number): ThunkType => {
    return async (dispatch) => {
        let data = await counterAPI.reset(value);
        dispatch(resetCounter(data.value))
    }
}

type ActionsType = IncrementCounter | DecrementCounter | ResetCounter | SetDataCounter
type ThunkType = ThunkAction<void, RootState, unknown, ActionsType>