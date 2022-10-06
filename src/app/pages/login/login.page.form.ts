import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class LoginPageForm{
    private formbuilder:FormBuilder;
    constructor(formbuilder:FormBuilder){
        this.formbuilder = formbuilder;
    }

    createform() :FormGroup{
       return this.formbuilder.group({
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required]],
       });
    }
}