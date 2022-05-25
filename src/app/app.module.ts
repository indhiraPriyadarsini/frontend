import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AddAddressComponent } from './add-address/add-address.component';
import { CategoryComponent } from './category/category.component';
import { MenuComponent } from './menu/menu.component';
import { JwtAuthInterceptor } from './core/interceptor/jwt-auth.interceptor';
import { AuthGuard } from './shared/auth.guard';
import { CartComponent } from './cart/cart.component';
import { ToastrModule } from 'ngx-toastr';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AddHotelComponent } from './admin/add-hotel/add-hotel.component';
import { DeleteHotelComponent } from './admin/delete-hotel/delete-hotel.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';


const routes:Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
  {path:'address', component: AddAddressComponent},
  {path:'category', component: CategoryComponent},
  {path:'hotels',  loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule),canActivate:[AuthGuard]},
  {path:'menu', component: MenuComponent,canActivate:[AuthGuard]},
  {path:'cart', component: CartComponent},
  {path:'adminLogin', component: AdminLoginComponent},
  {path:'confirmation', component: ConfirmationComponent},
  
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    AddAddressComponent,
    CategoryComponent,
    MenuComponent,
    CartComponent,
    AdminLoginComponent,
    AddHotelComponent,
    DeleteHotelComponent,
    ConfirmationComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    ToastrModule,
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : JwtAuthInterceptor,
    multi : true
  }],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
