import { UserService } from './../shared/services/user.service';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {

  constructor(private injector: Injector,
              public userService: UserService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userService = this.injector.get(UserService);
    const tokenReq = req.clone({
      setHeaders: {
        Autorization:   `Bearer ${userService.getToken()}`  // ajout du bearer du token
      }
    });

    return next.handle(tokenReq);

  }

}
