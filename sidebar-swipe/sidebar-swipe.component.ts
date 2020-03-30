import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SetGetWidthSidebarPipe} from './set-get-width-sidebar.pipe';
import {SidebarSwipeService} from './sidebar-swipe.service';

@Component({
  selector: 'app-sidebar-swipe',
  templateUrl: './sidebar-swipe.component.html',
  styleUrls: ['./sidebar-swipe.component.scss'],
  providers : [SetGetWidthSidebarPipe]
})
export class SidebarSwipeComponent implements OnInit {
  name = 'Angular';
  width;
  constructor(private sidebarService: SidebarSwipeService,
              private cdr: ChangeDetectorRef) {
  }
  ngOnInit() {
  }

  setWidth(widthNumber: number){
    this.width = widthNumber;
    this.cdr.detectChanges();

  }
}
