import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { first, map, mergeMap, Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../+state/auth.reducer';
import { getUser } from '../../+state/auth.selectors';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private modal: NzModalService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      withCredentials: true,
    });
    return next.handle(req).pipe(
      tap({
        error: (err) => {
          if (err.error.code === 1011) {
            this.router.navigate(['/auth/login']);
          } else if (
            (this.router.url === '/auth/login' && err.error.code === 1003) ||
            (this.router.url === '/account/profile' && err.error.code === 1003)
          ) {
            this.router.navigate(['/account/profile']);
            this.modal.warning({
              nzTitle: 'Update your profile now!',
              nzContent: `Please update your profile now so administrator can review and activate it!`,
            });
          } else {
            this.modal.error({
              nzTitle: 'Error',
              nzContent: `Code: ${err.error.code} ${err.error.message}`,
            });
          }
        },
      })
    );
  }
}
