import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Url } from '../model';

export class hotelData {
  constructor(
    public hotelName: string,
    public categoryType: string,
    public hotelUrl: string,
   
  ) { }
}
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hoteldata!: hotelData[];
  constructor(
    private http:HttpClient,
    private router:Router,
  ) { }


  ngOnInit(): void {
    this.getHotel()
  }
  
  hotelName(hotelName:any){
    localStorage.setItem("hotelName","" + hotelName)
    console.log(hotelName)
    this.router.navigate(['menu'])
  }
  getHotel(){
    const category = localStorage.getItem("category")
    this.http.get<any>(Url.address+ 'hotelData/' + category).subscribe(
      response => {
        console.log(response);
        this.hoteldata = response;
      }
    );
}}
