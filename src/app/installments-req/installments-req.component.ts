import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-installments-req',
  templateUrl: './installments-req.component.html',
  styleUrls: ['./installments-req.component.scss']
})
export class InstallmentsReqComponent implements OnInit {

  mainReq = [
    {
      type:'رقم الطلب',
      value:'6545554545'
    },
    {
      type:'تاريخ تقديم الطلب',
      value:'9 سبتمبر 2020'
    }
  ]

  occordionData = [
    {
      type: 'الماركة',
      value: 'بي ام دبليو'
    },

    {
      type: 'المودبل',
      value: '320'
    },

    {
      type: 'السنة',
      value: '2020'
    },

    {
      type: 'فئة السيارة',
      value: 'A/T Exclusive'
    },

    {
      type: 'المقدم',
      value: '100.000'
    },

    {
      type: 'عدد الشهور',
      value: '12'
    },

    {
      type: 'النظام',
      value: 'الاقتصادي'
    },

  ]

  constructor() { }

  ngOnInit() {
  }



}
