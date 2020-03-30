import {Directive, HostBinding, Output, EventEmitter, ChangeDetectorRef, Input, AfterViewInit} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {fromEvent} from 'rxjs';
import {debounceTime, tap} from 'rxjs/operators';

@Directive({
  selector: '[appOpenSidebarOnSwipe]'
})

export class OpenSidebarOnSwipeDirective implements AfterViewInit{
  sidebar: MatSidenav;
  startTime;
  startX;
  endTime;

  @HostBinding('style.width') width;
  @Input('sideNav')
  set sideNav(sideNav: MatSidenav) {
    console.log(sideNav)
    this.sidebar = sideNav;
  }

  @Output() setWidth: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }
  ngAfterViewInit() {
    this.setWidth.emit(80);
    this.startOnTouch();
    this.startTouchMove();
    this.touchEnd();
  }
  startOnTouch() {
    fromEvent(document, 'touchstart').pipe(
       tap((e: TouchEvent) => e.touches[0].clientX <=20 && e.touches[0].clientY >= 65 ? (this.sidebar.open(),
        this.startTime = new Date().getTime(),
        this.startX = e.touches[0].clientX ,
        this.setWidth.emit (e.touches[0].clientX)) : '' )
    ).subscribe();
  }
  startTouchMove(){
    fromEvent(document, 'touchmove').pipe(
      debounceTime(0)).subscribe(
      (e:TouchEvent) => {
        this.endTime = new Date().getTime();
        let speed = Math.abs(e.touches[0].clientX - this.startX) / (this.endTime - this.startTime);
        this.sidebar._width > 40 ? this.setWidth.emit(80) : '';
        let w = this.sidebar._width;
        this.sidebar._width <= 79 ? this.setWidth.emit ( w += (0.5 + speed)) : '';
      })
  }
  touchEnd(){
    fromEvent(document, 'touchend').subscribe(()=> {
      this.sidebar._width < 40 ? this.sidebar.close() : '';
    } );
  }
}
