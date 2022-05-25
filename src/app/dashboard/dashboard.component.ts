import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/_services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
//this.auth.canAccess();
  }

}
