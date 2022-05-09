import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formdata = {email:"",password:""};
  submit =  false;
  loading = false;
  errorMessage = ""
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.loading = true
    
  }

}
