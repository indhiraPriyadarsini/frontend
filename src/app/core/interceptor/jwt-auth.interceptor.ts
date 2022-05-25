import { Injectable } from '@angular/core';
import { TokenService } from '../_services/token.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { LogoutService } from '../_services/logout.service';

@Injectable()
export class JwtAuthInterceptor implements HttpInterceptor {
  refreshed: boolean = false;
  refreshRequest: boolean = false;
  


  constructor(
    private http : HttpClient,
    private tokenService : TokenService,
    private logoutService : LogoutService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let  reqAuth;
    if (this.refreshRequest) {
    reqAuth = request.clone({
      setHeaders:{
        Authorization: "Bearer " + this.tokenService.getRefreshToken()
      }
    })
    this.refreshRequest = false;
  }
  else{
    reqAuth = request.clone({
      setHeaders: {
        Authorization: "Bearer " + this.tokenService.getAuthToken()
      }
    })
  }
    
    return next.handle(reqAuth).pipe(catchError((err: HttpErrorResponse) => {
      if (err && err.status == 401 && !this.refreshed) {
        this.refreshed = true;
        this.refreshRequest = true;
        return this.http.post('http://localhost:3000/token', "").pipe(
          switchMap((res: any) => {
            this.tokenService.saveAuthToken(res.authToken)
            this.refreshed = false
            return next.handle(request.clone({
              setHeaders: {
                Authorization: "Bearer " + this.tokenService.getAuthToken()
              }
            }));
          })
        ).pipe(catchError((err: HttpErrorResponse) => {
          if (err && err.status == 401) {
            this.logoutService.logoutUser()
          }
          return throwError(() => err);
        }))
      }
      return throwError(() => err);
    }));
  }
  }
