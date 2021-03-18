import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from './../../../entities/user';
import { AuthService } from './../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private userService:AuthService,
    private router:Router,
    private toastr: ToastrService
    ) {

    let formControls = {
     

      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
    
    }

    this.registerForm = this.fb.group(formControls)
  }


  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }


  ngOnInit(): void {

 
  }

  login() {
    let data = this.registerForm.value;

    let user = new User(data.email,data.password);

    this.userService.loginAdmin(user).subscribe(
      res=>{
        console.log(res);
        let token = res.token;
        localStorage.setItem("myToken",token);

        this.router.navigate(['/admin']);
        
      },
      err=>{
        console.log(err);
        
      }
    )
    
  }

}

