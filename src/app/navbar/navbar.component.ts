import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/_services/auth.service';
import { LogoutService } from '../core/_services/logout.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthService,private logoutService: LogoutService ) { }
  logout() {
   this.logoutService.logoutUser()
  }
  ngOnInit(): void {
  }

}
