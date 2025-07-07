import { CommonModule, NgIf } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
       encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports: [

ReactiveFormsModule, CommonModule,
        FormsModule,
        ReactiveFormsModule,
         NgIf,
        MatFormFieldModule, MatButtonModule,


    ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm:FormGroup;
  constructor(private fb :FormBuilder , private authService:AuthService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email:['', [Validators.required , Validators.email]],
      password:['', [Validators.required , Validators.minLength(6)]],

    });
  }
 get email(){
  return this.loginForm.get('email');
 }

 get password(){
  return this.loginForm.get('password');
 }

 onSubmit(){
  if (this.loginForm.valid) {
    const {email,password} = this.loginForm.value;
    this.authService.login({email, password}).subscribe({
      next: (res) => {
        localStorage.setItem('token' , res.token);
        this.router.navigate(['/dashboard']);
         },
     error:(err) =>{
      console.error(err);
      alert('ورود ناموفق!اطلاعات را بررسی کنید ');
     }
    });

  } else {

  }

 }
}
