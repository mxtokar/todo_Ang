import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './components/header/header.component';
import {DashboardModule} from './pages/dashboard/dashboard.module';
import {LoginModule} from './pages/login/login.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserService} from './core/services/user.service';
import {BaseUrlInterceptor} from './core/interceptors/baseUrl.interceptor';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    LoginModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  bootstrap: [AppComponent],
  providers: [UserService, {provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true}],
})
export class AppModule {}
