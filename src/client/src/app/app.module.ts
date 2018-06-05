import { IndexComponent } from './components/index/index.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';
import { ProfileComponent } from './components/profile/profile.component';


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}
const appRoutes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'profile', component: ProfileComponent},
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: true })
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
