import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input() isFound: number;
  @Output() isFoundChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  changeisFoundHandler(isFound: number) {
    this.isFoundChange.emit(isFound);
  }
}
