import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { AUTH_CONFIG } from './auth0-variables';

@Injectable()
export class AuthGuard implements CanActivate {
 constructor(private auth: AuthService, private router: Router) {}
 
  canActivate(route: ActivatedRouteSnapshot) {
    if (this.auth.isAuthenticated()) {
      if (this.auth.isInRoles(route.data.requiredRoles))
        return true;
      
      this.router.navigateByUrl(`https://tim-lab.eu.auth0.com/login?client=${AUTH_CONFIG.clientID}`);
      return false;
    }
    
    this.auth.login();
    return false;
  }
}