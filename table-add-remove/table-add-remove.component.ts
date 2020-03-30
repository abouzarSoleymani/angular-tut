import { Component, OnInit } from '@angular/core';
import {animate, group, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-table-add-remove',
  templateUrl: './table-add-remove.component.html',
  styleUrls: ['./table-add-remove.component.scss'],
  animations: [
    trigger('itemAnim', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate(350)
      ]),
      transition(':leave', [
        group([
          animate('0.2s ease', style({
            transform: 'translate(150px,25px)'
          })),
          animate('0.5s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class TableAddRemoveComponent {
  rows = [1];
  counter = 1;

  addRow() {
    this.rows.push(++this.counter);
  }

  deleteRow(row: number) {
    console.log(this.rows)
    console.log(row)
    this.rows.splice(row, 1);
    console.log(this.rows)
  }
}
