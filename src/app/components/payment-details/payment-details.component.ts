import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html'
})
export class PaymentDetailsComponent implements OnInit {

  constructor(private _router: Router,
    private _jwtHelper: JwtHelperService) {
    }

  ngOnInit(): void {
  }

  isUserAuthenticated() {
    const token = localStorage.getItem('token');
    return token && !this._jwtHelper.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
