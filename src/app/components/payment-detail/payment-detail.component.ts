import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { servicePaymentDetail } from 'src/app/services/payment-detail.service';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html'
})
export class PaymentDetailComponent implements OnInit {

  constructor(
    public servicePaymentDetail: servicePaymentDetail) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(formData?: NgForm) {
    if (formData) {
      formData.resetForm();
    }
    
    this.servicePaymentDetail.formData = {
      Id: '00000000-0000-0000-0000-000000000000',
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: ''
    };
  }

  onSubmit(formData: NgForm) {
    if(formData.value.Id === '00000000-0000-0000-0000-000000000000') {
      this.insertRecord(formData);
      this.servicePaymentDetail.refreshList();
    }else {
      this.updateRecord(formData);
      this.servicePaymentDetail.refreshList();
    }
  }

  insertRecord(formData: NgForm) {
    this.servicePaymentDetail.postPaymentDetail(formData.value).subscribe(res => {
      this.resetForm(formData);
    },err => {
      console.log("err: ",err)
    });
  }
  
  updateRecord(formData: NgForm) {
    this.servicePaymentDetail.putPaymentDetail(formData.value).subscribe(res => {
      this.resetForm();
    },err => {
      console.log("err: ",err)
    });
  }
}
