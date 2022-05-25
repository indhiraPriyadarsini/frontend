import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Url } from '../model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //formdata = {name:"",email:"",password:""};
  submit = false;
  errorMessage = " ";
  loading=false;

  constructor(private http:HttpClient, private router:Router) { }
  
  register(data:any){
    console.log(data);
    this.http.post(Url.address+"register",{username:data.username,email:data.email,password:data.password})
    .subscribe(
      (msg)=>{
      console.log(msg+"success")
      this.router.navigate(['address'])
    },(error)=>{
      console.log(error)
     // this.router.navigate(['address'])
    })
  
     
    
    
  }
  
    
  
    ngOnInit(): void {
    }
  
  }