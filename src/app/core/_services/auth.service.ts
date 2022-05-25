import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  toaster: any;
  // login(email: string, password: string) {
  //   throw new Error('Method not implemented.');
  // }

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

 

  address(doorNo:BigInteger,street:string,area:string,city:string,state:string,pincode:string,nearestLandmark:string){
    return this.http.post<{idToken:string}>(
      'http://localhost:3000/address', 
    {doorNo:doorNo,street:street,area:area,city:city,state:state,pincode:pincode,nearestLandmark:nearestLandmark}

    );
  }
  // LogoutClick() {
  //   this.auth.userLogout();
  //   this.toaster.success('Logout Successful');
  // }
}
