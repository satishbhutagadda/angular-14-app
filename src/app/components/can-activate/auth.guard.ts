import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { USER_TYPES } from 'src/app/shared/constants/app-constants';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // run this command to access the can activate route
      // sessionStorage.setItem('user-type', 'Prime');
      if(this.authService.userRole !== USER_TYPES.PRIME){
        alert('Only Prime Users are allowed!')
        return false;
      }
      return true;
  }
  
}
