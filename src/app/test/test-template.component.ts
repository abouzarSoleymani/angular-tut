import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-test-template',
  templateUrl: './test-template.component.html',
  styleUrls: ['./test-template.component.scss']
})
export class TestTemplateComponent implements OnInit {
  @Input()
  headerTemplate: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

}
