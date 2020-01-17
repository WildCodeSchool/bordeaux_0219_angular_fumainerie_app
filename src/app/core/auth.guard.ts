import { UserService } from './../shared/services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  token: string;
  constructor(private router: Router,
              private service: UserService) {
    }

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // check si user déja récupéré, sinon > connecter
        return true; // put down this ligne under the if function for activate the authentification  🤨
        if (this.service.user) {

        }
        return this.service.isLogged().pipe(catchError(err => {

          this.router.navigate(['/connexion']);
          return throwError(err);
        }));

      }
    }










