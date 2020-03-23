import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, ReplaySubject} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  behaviorSubject = new BehaviorSubject(2);
  replaySubject = new ReplaySubject(2);

  constructor() { }

  ngOnInit() {
    this.myBehaviorSubject();
    this.myReplySubject();

  }
  myBehaviorSubject(){
    this.behaviorSubject.next(1);
    this.behaviorSubject.next(2);
    this.behaviorSubject.next(3);
    this.behaviorSubject.next(4);
    this.behaviorSubject.subscribe(x => {
      console.log('From 1st sub:', x);
    });
  }
  myReplySubject(){
    this.replaySubject.next(1);
    this.replaySubject.next(2);
    this.replaySubject.next(3);
    this.replaySubject.next(4);
    this.replaySubject.subscribe(x => {
      console.log('From 1st sub:', x);
    });
  }
}
