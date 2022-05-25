import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core/_services/token.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
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
     
      this.http.post('http://localhost:3000/adminLogin', {email:data.email,password:data.password})
  
      .subscribe(
       (res:any)=>{
         // this.auth.storeToken(res.idToken);
        // console.log(res);
          this.token.saveAuthToken(res.authToken),
          this.token.saveRefreshToken(res.refreshToken),
          // this.toaster.success('Logout Successful');
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