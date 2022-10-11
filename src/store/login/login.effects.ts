import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { login, loginFail, loginSuccess, recovePassword, recovePasswordFail, recovePasswordSuccess } from "./login.actions";
import { catchError, map,switchMap } from 'rxjs/operators';
import { AuthService } from "src/app/services/auth/auth.service";
import { of } from "rxjs";


@Injectable()
export class LoginEffects{
  
    constructor(private actions$:Actions, private authservice:AuthService){

    }

    recoverPassword$ = createEffect(()=> this.actions$.pipe(
        ofType(recovePassword),
        switchMap((payload:{email:string})=> this.authservice.recoverEmailPassword(payload.email).pipe(
            map(()=> recovePasswordSuccess()),
            catchError(error=> of(recovePasswordFail({error})))
        ))
    ))

    login$ = createEffect(()=> this.actions$.pipe(
        ofType(login),
        switchMap((payload:{email:string, password:string})=>
         this.authservice.login(payload.email,payload.password).pipe(
            map(user=>loginSuccess({user})),
            catchError(error=> of (loginFail({error})))
         )
        )
    ))
}