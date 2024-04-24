import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent {
  
  constructor(
    private fb : FormBuilder,
    private userService : UserService
  ){}

  public loginForm = this.fb.group({
    "email": ['',Validators.required],
    "pass": ['',[Validators.required]]
  });
  
  get email() { return this.loginForm.get('email') as FormControl; }
  get pass() { return this.loginForm.get('pass') as FormControl; }
 
  public handleSubmit() : void {    
    console.log("handleSubmit", 'logger')
    if(this.loginForm.valid){
      console.log(this.loginForm.value)

      //subscribe ejecuta la peticion      
      const token = this.userService
        .SignIn(this.loginForm.value as { email: string; pass: string })
        .subscribe( res => {
          console.log(res)
        });
 
    }
  }
}
