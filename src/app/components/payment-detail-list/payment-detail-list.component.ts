import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from 'src/app/models';
import { servicePaymentDetail } from 'src/app/services/payment-detail.service';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html'
})
export class PaymentDetailListComponent implements OnInit {
  paymentDetailList: PaymentDetail[] = [];

  constructor(public servicePaymentDetail: servicePaymentDetail) { }

  ngOnInit(): void {
    this.servicePaymentDetail.refreshList();
  }

  populateForm(pd: PaymentDetail ) {
    this.servicePaymentDetail.formData = Object.assign({},pd);
  }

  deleteRecord(id: string ) {
    this.servicePaymentDetail.deletePaymentDetail(id).subscribe(res => {
      this.servicePaymentDetail.refreshList();
    })
  }
}
