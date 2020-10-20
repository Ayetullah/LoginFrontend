import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LoginService } from './services/index';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';


import { HttpClientModule } from '@angular/common/http';
import { PaymentDetailComponent } from './components/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './components/payment-detail-list/payment-detail-list.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { servicePaymentDetail } from './services/payment-detail.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './services/auth-guard.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent,
    PaymentDetailsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
        allowedDomains:["localhost:4200"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [LoginService, servicePaymentDetail, AuthGuard],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
