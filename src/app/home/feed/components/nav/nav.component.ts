import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input() isFound: number;
  @Input() show: boolean;
  @Output() isFoundChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() filterChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  changeisFoundHandler(isFound: number) {
    this.isFoundChange.emit(isFound);
  }
  filterHandler(show: boolean) {
    this.filterChange.emit(show);
  }
}
