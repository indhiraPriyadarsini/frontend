import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { TokenService } from '../core/_services/token.service';
import { Url } from '../model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//  formdata = {email:"",password:""};
  submit =  false;
  loading = false;
  errorMessage = ""
  constructor(private http:HttpClient,
              private router:Router , 
              private token: TokenService
              ) { }

  ngOnInit(): void {
  }
  login(data:any){
    this.loading = true;
  // this.auth.login(this.formdata.email,this.formdata.password)
   
    this.http.post(Url.address+ 'login', {email:data.email,password:data.password})

    .subscribe(
     (res:any)=>{
       // this.auth.storeToken(res.idToken);
      // console.log(res);
        this.token.saveAuthToken(res.authToken),
        this.token.saveRefreshToken(res.refreshToken),
        // this.toaster.success('Logout Successful');
        alert("Login Successful")
        this.router.navigate([''])
      },
      (error)=>{
        console.log(error);
        console.log("wrong credentials");
        //this.router.navigate([''])
        }
  
    )
    
  }

  

}
