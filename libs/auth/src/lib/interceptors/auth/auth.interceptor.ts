import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { first, mergeMap, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../+state/auth.reducer';
import { getUser } from '../../+state/auth.selectors';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<State>) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      withCredentials: true,
    });
    return next.handle(req);

    // return this.store.select(getUser).pipe(
    //   first(),
    //   mergeMap(user => {
    //     const authReq = user ? req.clone({
    //       //Since dbAuth is the authentication method, no need to set header
    //       // session will be use for authentication
    //       // setHeaders: { Authorization: 'Bearer ' + user.token },
    //     }) : req;
    //     return next.handle(authReq);
    //   }),
    // );
  }
}
