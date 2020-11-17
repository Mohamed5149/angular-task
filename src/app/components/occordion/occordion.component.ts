import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-occordion',
  templateUrl: './occordion.component.html',
  styleUrls: ['./occordion.component.scss']
})
export class OccordionComponent implements OnInit {
  reqIsOpen = false;
  @Input() data = [];


  constructor() { }

  ngOnInit() {
  }

  openReq() {
    this.reqIsOpen = !this.reqIsOpen;
  }

}
