import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(email: string, password: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private router:Router,private http:HttpClient) { }

  isAuthenticated():boolean{
    if(sessionStorage.getItem('token')!==null){
      return true;
    }
    return false;
  }

  canAccess(){
    if(!this.isAuthenticated()){
      this.router.navigate(['/login'])
    }
  }

  register(name:string,email:string,password:string){
      return this.http.post<{idToken:string}>(
        'localhost:8080/register', 
      {displayName:name,email:email,password:password}

      );
  }

  storeToken(token:string){
      sessionStorage.setItem('token',token);
  }
}
