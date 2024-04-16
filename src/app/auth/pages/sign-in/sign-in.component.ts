import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {
  
  public loginForm !: FormGroup;

  constructor(
    private formBuilder : FormBuilder
    // private userService : UserService
  ){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });


  }
 
  public handleSubmit() : void {    
    console.log("handleSubmit", 'logger')
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
    }
  }
}
