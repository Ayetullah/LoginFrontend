import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentDetail } from '../models';

@Injectable()
export class servicePaymentDetail {
  formData: PaymentDetail;
  readonly rootUrl = 'https://localhost:7500/api/';
  list: PaymentDetail[];
  constructor(
    private _http: HttpClient
  ) { }

  postPaymentDetail(data: PaymentDetail) {
    return this._http.post(this.rootUrl+'PaymentDetails',data)
  }

  refreshList() {
    return this._http.get(this.rootUrl+ 'PaymentDetails')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }

  putPaymentDetail(data: PaymentDetail) {
    return this._http.put(this.rootUrl+'PaymentDetails/'+data.Id,data)
  }

  deletePaymentDetail(id: string) {
    return this._http.delete(this.rootUrl+'PaymentDetails/'+id)
  }
}
