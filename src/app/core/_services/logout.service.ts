import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  logoutUser() {
    localStorage.clear()
    this.router.navigate(['/login'])
  }
  constructor(
    private router : Router
  ) { }
}
