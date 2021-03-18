import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { ValidationemailComponent } from './validationemail/validationemail.component';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [LoginComponent, SignupComponent, PasswordresetComponent, ValidationemailComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ]
})
export class AuthModule { }
