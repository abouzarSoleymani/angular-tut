import { Component, OnInit } from '@angular/core';
import {SimpleFunction} from '../../utils/simple-function';

@Component({
  selector: 'app-hover-btn',
  templateUrl: './hover-btn.component.html',
  styleUrls: ['./hover-btn.component.scss']
})
export class HoverBtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    SimpleFunction()
  }

}
