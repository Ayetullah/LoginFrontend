import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class LoginService {
  readonly rootUrl = 'http://localhost:44355/api'
  constructor(private _http: HttpClient) {
   }

  postData(value: any) {
    return this._http.post(`${this.rootUrl}/users`, null);
  }

  getData() {
    return this._http.get(`${this.rootUrl}/users`,null);
  }
}
