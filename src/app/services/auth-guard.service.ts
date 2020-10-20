import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _router: Router, private jwtHelper: JwtHelperService) {}

    canActivate() {
        const token = localStorage.getItem('token');
        if(token && !this.jwtHelper.isTokenExpired(token)) {
            return true;
        }

        this._router.navigate(['login']);
        return false;
    }
}