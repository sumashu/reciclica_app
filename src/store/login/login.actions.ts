import { createAction, props } from "@ngrx/store";
import { User } from "src/app/model/user/User";

export const recovePassword = createAction("[Recover password]",props<{email:string}>());
export const recovePasswordSuccess = createAction("[Recover password] success");
export const recovePasswordFail = createAction("[Recover password] fail",props<{error:any}>());

export const  login  = createAction("[Login]", props<{email:string, password:string}>());
export const  loginSuccess  = createAction("[Login] success", props<{user:User}>());
export const  loginFail  = createAction("[Login] fail", props<{error:any}>());