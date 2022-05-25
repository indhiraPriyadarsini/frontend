import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private router:Router,
  ) { }
  
  category(category:any){
    localStorage.setItem("category",""+category)
    this.router.navigate(['hotels'])
  }
  ngOnInit(): void {
  }

}
