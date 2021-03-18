import { User } from '../entities/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = "http://localhost:3000/users/login";
  private _registerUrl = "http://localhost:3000/users";

  constructor(private http: HttpClient  ) { 
    
  }

  registerUser(user : User){
    return this.http.post(this._registerUrl,user)
  }
  registerAdmin(user : User){
    return this.http.post<any>(this._registerUrl, user);
  }
  loginAdmin(user:User){
    return this.http.post<any>(this._loginUrl, user);
    console.warn("ok");
  }

  loginUser(user : User){
   return this.http.post<any>(this._loginUrl , user)
   console.warn("ok");
  }
}
