import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'auth-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent {
 
  constructor(
    private fb : FormBuilder,
    private userService : UserService
  ){}
  
  // aplicar validation.compose
  registerForm = this.fb.group({
    'name': ['', Validators.required],
    'email': ['', [Validators.required, Validators.email]],
    'pass': ['', [Validators.required, Validators.minLength(8)]]
  });

  handleSubmit() : void {
    if(!this.registerForm.valid) return;
    console.log(this.registerForm.value)
    this.userService.SignUp(this.registerForm.value as Omit<IUser, "id">).subscribe();
  }

  get name() { return this.registerForm.get('name'); }
  get email() { return this.registerForm.get('email'); }
  get pass() { return this.registerForm.get('pass'); }

}
