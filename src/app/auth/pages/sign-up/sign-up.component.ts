import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'auth-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {
 
  registerForm : FormGroup;

  constructor(
    private fb : FormBuilder,
    private userService : UserService
  ){}

  ngOnInit(): void {
     this.registerForm = this.initForm();    
  }
  
  initForm() : FormGroup {    
    // aplicar validation.compose
    return this.fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      'pass': ['', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])]
    });
  }
  
  onSubmit() : void { 
    this.registerForm.markAllAsTouched();
    // validamos si fomrulario es valido
    if(!this.registerForm.valid) return; 
           
    console.log(this.registerForm.value);
    // enviar datos del formulario al servicio userService
    this.userService.SignUp(this.registerForm.value as Omit<IUser, "id">).subscribe();
  }

  get name() { return this.registerForm.get('name'); }
  get email() { return this.registerForm.get('email'); }
  get pass() { return this.registerForm.get('pass'); }

  get errors() {

    return {
      name: this.name?.errors,
      email: this.email?.errors,
      pass: this.pass?.errors
    }
  }

  errorControl(control : string ){
    return this.registerForm.get(control)?.errors;
  }

  // get hasError() {
  //   return this.registerForm.invalid && this.registerForm.touched;
  // }


}
