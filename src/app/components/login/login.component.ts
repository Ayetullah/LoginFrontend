import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  invalidLogin = false;
  constructor(
    private _router: Router,
    private _http: HttpClient
    ) { }

  ngOnInit(): void {
  }
  
  login(form: NgForm) {
    const credentials = {
      'UserName': form.value.username,
      'Password': form.value.password
    }

    this._http.post('https://localhost:7500/api/auth/login', credentials)
    .subscribe(res => {
      const token = (<any>res).token;
      localStorage.setItem('token',token);
      this.invalidLogin = false;
      this._router.navigate(['paymentDetails'])
    }, err => {this.invalidLogin = true});
  }

  logout() {
    localStorage.removeItem('token');
  }
}
