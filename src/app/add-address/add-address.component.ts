import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Url } from '../model';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  formdata = {doorNo:"",street:"",area:"",city:"",state:"",pincode:"",nearestLandmark:""};
  submit =  false;
  constructor( private router:Router) { }

  ngOnInit(): void {
  }
onSubmit(){
this.router.navigate(['/login'])
}
}
