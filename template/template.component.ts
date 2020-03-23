import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  ctx = {estimate: 12};
  tempLoading = false;
  constructor() { }

  ngOnInit() {
  }

}
