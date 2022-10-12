import { createReducer, on } from "@ngrx/store";
import { AppInitialState } from "../AppInitialState";
import { register } from "./register.actions";
import { RegisterState } from "./RegisterState";

const initalState = AppInitialState.register;

const reducer = createReducer(initalState,
    on(register,state =>{
        return {
            ...state,
            error:null,
            isRegistered:false,
            isRegistering:true
        }
    })
    
    );

export function registerReducer(state:RegisterState,action){
    return reducer(state,action);
}