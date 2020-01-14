import { UserService } from './../shared/services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  token: string;
  constructor(private router: Router,
              private service: UserService) {
                this.token = JSON.parse(localStorage.getItem('TOKEN'))  || null;
              }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // check si user déja récupéré, sinon > connecter
      if (this.service.user) {
        return true;

      } else {
        this.router.navigate(['/connexion']);
      }

      }

  }


