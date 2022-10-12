import { AppState } from "./AppState";
import { register } from "./register/register.actions";

export const AppInitialState: AppState = {
    loading:{
        show:false
    },
    login:{
        error:null,
        isLoggedIn:false,
        isLoggingIn:false,
        isRecoveredPassword:false,
        isRecoveringPassword:false,
        
    },
    register:{
       error:null,
       isRegistered:false,
       isRegistering:false


    }
}