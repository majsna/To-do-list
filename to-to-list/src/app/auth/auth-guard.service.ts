import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router/src/router_state";
import {Observable} from "rxjs/Observable";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authService.user){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  };


}
