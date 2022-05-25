import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class menudb{
  constructor(
    //public hotelName: string,
    public dishes: string,
    public price: BigInteger,
  ){}
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menudata!: menudb[];
  totalPrice:number=parseInt(localStorage.getItem("totalPrice") || "0");


  constructor(
    private http:HttpClient,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.getMenuData();
    this.menudata
   
  }

  // hotelName(hotelName:any){
  //   localStorage.setItem("hotelName","" + hotelName)
  //   console.log(hotelName)
  //   this.router.navigate([''])
  // }
  getMenuData(){
    const category = localStorage.getItem("category")
    const hotelName = localStorage.getItem("hotelName")
    this.http.get<any>("http://localhost:3000/"  +category +"/" + hotelName).subscribe(
      response=>{
       
        console.log(response);
        this.menudata = response;
        
      }
    )
  }

  addToCart(foodData:any,){ 

    // console.log(foodData)
    alert("Added To Cart")
   
    if (localStorage.getItem("cartItem") == null) {
      localStorage.setItem("cartItem", `{"dishName":"${foodData.dishName}","dishPrice":"${foodData.dishPrice}"}`)
      this.totalPrice+=foodData.dishPrice
      localStorage.setItem("totalPrice", ""+this.totalPrice)
    } else {
      localStorage.setItem("cartItem",localStorage.getItem("cartItem")+","+`{"dishName":"${foodData.dishName}","dishPrice":"${foodData.dishPrice}"}`)
      this.totalPrice+=parseInt(foodData.dishPrice)
      localStorage.setItem("totalPrice",""+this.totalPrice)
    }
  }

  cart(){
    this.router.navigate(['/cart'])
  }
  logoutUser() {
    localStorage.clear()
    this.router.navigate([''])
  }
}
