import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgZorroAntdModule } from '@batstateu/ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './interceptors/auth/auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';

export const authRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
];
const COMPONENTS = [LoginComponent, LoginFormComponent];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: COMPONENTS,
  exports: [COMPONENTS],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class AuthModule {}
